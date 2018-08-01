import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSource = new BehaviorSubject<any>('');
  currentMessage  = this.messageSource.asObservable();

  constructor() { }

  addMessage(message: any) {
    this.messageSource.next(message);
  }

}
