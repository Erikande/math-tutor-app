import { Component, ElementRef, ViewChild } from '@angular/core';

import { CalculatorService } from './services/calculator-service/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title = 'math-tutor-app';
  @ViewChild('appInputSelect') input: ElementRef;

  xValue: number;
  yValue: number;
  answer: number;

  statusMessage: string = '';
  statusType: 'success' | 'error' | '' = '';

  constructor(private calculatorService: CalculatorService) {
    this.generateXandY();
    this.answer = null;
  }

  checkAnswer(): void {
    if (this.calculatorService.checkAnswer(this.xValue, this.yValue, this.answer)) {
      this.statusMessage = "That's right! Try another one.";
      this.statusType = 'success';
      setTimeout(() => this.resetForm(), 500);
    } else {
      this.statusMessage = 'Sorry, that is not correct. Please try again.';
      this.statusType = 'error';
      this.setFocus();
    }
  }

  resetForm(): void {
    this.statusMessage = '';
    this.statusType = '';
    this.generateXandY();
    this.answer = null;
    this.setFocus();
  }

  setFocus(): void {
    const inputBox: HTMLInputElement = this.input.nativeElement as HTMLInputElement;
    inputBox.focus();
  }

  generateXandY(): void {
    this.xValue = this.calculatorService.generateNumber();
    this.yValue = this.calculatorService.generateNumber();
  }
}
