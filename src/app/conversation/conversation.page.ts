import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services/services.service";

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    // console.log(this.servicesService)
  }

}
