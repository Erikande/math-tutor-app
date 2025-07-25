// scripts/generate-audit-summary.ts

const fs = require('fs');
const path = require('path');

const lhPath = path.resolve(__dirname, '../audit/lh-latest.json');
const axePath = path.resolve(__dirname, '../audit/axe-latest.json');
const summaryPath = path.resolve(__dirname, '../audit/summary.md');

function getLHScores(report: any) {
  return {
    performance: Math.round(report.categories.performance.score * 100),
    accessibility: Math.round(report.categories.accessibility.score * 100),
    bestPractices: Math.round(report.categories['best-practices'].score * 100),
    seo: Math.round(report.categories.seo.score * 100),
  };
}

function getAxeViolations(report: any) {
  // If report is an array (as in your case), pull first object
  const root = Array.isArray(report) ? report[0] : report;
  const violations = Array.isArray(root.violations) ? root.violations : [];

  return violations
    .filter(v => v && typeof v === 'object')
    .map((v: any) => ({
      id: v.id || 'unknown',
      description: v.description || 'No description provided',
      nodes: Array.isArray(v.nodes) ? v.nodes.length : 0,
    }));
}


function main() {
  if (!fs.existsSync(lhPath) || !fs.existsSync(axePath)) {
    console.error('❌ Error: One or both audit files are missing.');
    process.exit(1);
  }

  const lhReport = JSON.parse(fs.readFileSync(lhPath, 'utf-8'));
  const axeReport = JSON.parse(fs.readFileSync(axePath, 'utf-8'));
  console.log('Parsed axe report keys:', Object.keys(axeReport)); // debug logging

  const scores = getLHScores(lhReport);
  const violations = getAxeViolations(axeReport);

  const md = `# 📊 Audit Summary – Auto Generated

**Date:** ${new Date().toISOString().slice(0, 10)}

## 🔦 Lighthouse

| Category         | Score |
|------------------|-------|
| Performance      | ${scores.performance} |
| Accessibility    | ${scores.accessibility} |
| Best Practices   | ${scores.bestPractices} |
| SEO              | ${scores.seo} |

## 🦯 Axe-core Violations

Total: **${violations.length}**

${violations.map(v => `- **${v.id}**: ${v.description} (${v.nodes} node${v.nodes > 1 ? 's' : ''})`).join('\n')}

> This summary was auto-generated by \`generate-audit-summary.ts\`
`;

  fs.writeFileSync(summaryPath, md, 'utf-8');
  console.log('✅ audit/summary.md generated');
}

main();
