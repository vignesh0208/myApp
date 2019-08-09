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
    
  }

  removeItem(item){
    for(var i = 0; i < this.servicesService.dataValue.length; i++) {
      if(this.servicesService.dataValue[i] == item){
        this.servicesService.dataValue.splice(i, 1);
      }
    }
  }
}
