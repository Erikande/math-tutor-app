/// <reference types="jasmine" />
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorService } from './services/calculator-service/calculator.service';

// ✅ Angular Material modules used in the template
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

// ✅ Mocks
const mockCalculatorService = {
  generateNumber: jasmine.createSpy('generateNumber').and.returnValue(3),
  checkAnswer: jasmine.createSpy('checkAnswer').and.returnValue(true),
};

describe('AppComponent (A11y Messaging Version)', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
      ],
      providers: [
        { provide: CalculatorService, useValue: mockCalculatorService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show success message and reset form on correct answer', fakeAsync(() => {
    component.answer = 6;
    mockCalculatorService.checkAnswer.and.returnValue(true);
    spyOn(component, 'resetForm');

    component.checkAnswer();

    expect(component.statusMessage).toBe("That's right! Try another one.");
    expect(component.statusType).toBe('success');

    tick(500);
    expect(component.resetForm).toHaveBeenCalled();
  }));

  it('should show error message and set focus on incorrect answer', () => {
    component.answer = 999;
    mockCalculatorService.checkAnswer.and.returnValue(false);
    spyOn(component, 'setFocus');

    component.checkAnswer();

    expect(component.statusMessage).toBe('Sorry, that is not correct. Please try again.');
    expect(component.statusType).toBe('error');
    expect(component.setFocus).toHaveBeenCalled();
  });

  it('should reset form, clear message/state, and set focus', () => {
    spyOn(component, 'generateXandY');
    spyOn(component, 'setFocus');

    component.answer = 42;
    component.statusMessage = 'dummy';
    component.statusType = 'success';

    component.resetForm();

    expect(component.answer).toBeNull();
    expect(component.statusMessage).toBe('');
    expect(component.statusType).toBe('');
    expect(component.generateXandY).toHaveBeenCalled();
    expect(component.setFocus).toHaveBeenCalled();
  });

  it('should generate x and y values using CalculatorService', () => {
    mockCalculatorService.generateNumber.calls.reset();

    component.generateXandY();

    expect(mockCalculatorService.generateNumber).toHaveBeenCalledTimes(2);
    expect(component.xValue).toBe(3);
    expect(component.yValue).toBe(3);
  });
});
