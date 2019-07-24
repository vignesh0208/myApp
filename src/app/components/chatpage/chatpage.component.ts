import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { ServicesService } from "../../services/services.service";

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.scss'],
})
export class ChatpageComponent implements OnInit {
  public message: any;
  constructor(public navCtrl: NavController, private servicesService: ServicesService) { }

  ngOnInit() {}

  btnVal() {
    var datavalue = {
      message: this.message.trim(),
      name: "Vicky",
      senderType: "user"
    }
    if(datavalue.message != "") {
      this.servicesService.messages.push(datavalue);
      this.message = "";
    }
  }

  btnFunction(event) {
    if(event.keyCode == '13' && !event.shiftKey) {
      console.log("working")
      this.btnVal();
    }
  }
}
