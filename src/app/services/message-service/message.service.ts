import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private statusMessageSubject = new BehaviorSubject<string | null>(null);
  private statusTypeSubject = new BehaviorSubject<'success' | 'error' | null>(null);

  public statusMessage$ = this.statusMessageSubject.asObservable();
  public statusType$ = this.statusTypeSubject.asObservable();

  showSuccess(message: string): void {
    this.statusMessageSubject.next(message);
    this.statusTypeSubject.next('success');
  }

  showError(message: string): void {
    this.statusMessageSubject.next(message);
    this.statusTypeSubject.next('error');
  }

  clear(): void {
    this.statusMessageSubject.next(null);
    this.statusTypeSubject.next(null);
  }
}
