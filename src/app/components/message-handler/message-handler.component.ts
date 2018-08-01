import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../services/message/message.service';

@Component({
  selector: 'app-message-handler',
  templateUrl: './message-handler.component.html',
  styleUrls: ['./message-handler.component.scss']
})
export class MessageHandlerComponent implements OnInit {

  message: any;

  constructor(
    private messageSvc: MessageService
  ) { }

  ngOnInit() {
    this.handleMessages();
  }

  handleMessages() {
    this.messageSvc.currentMessage.subscribe(
      res => {
        this.message = res;
      }
    );
  }

}
