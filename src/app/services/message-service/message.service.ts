import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string): void {
    this.toastr.success(message, title);
  }

  showError(message: string, title: string): void {
    this.toastr.error(message, title);
  }
}
