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
  public show: any;
  constructor(public navCtrl: NavController, private servicesService: ServicesService) {
  }

  ngOnInit() {}

  btnVal() {
    var fun = this.servicesService.messages;
    var datavalue = {
      message: this.message.trim(),
      name: "Vicky",
      senderType: "user"
    };
    var loading = {
      message: "",
      name: "Loading",
      senderType: "bot"
    }
    var dataval = {
      message: "Hey!, how may i help you!",
      name: "Bot",
      senderType: "bot"
    };
    if(datavalue.message != "") {
      fun.push(datavalue);
      fun.push(loading);
      this.show = true;
      setTimeout(() => {
        this.show = false;
        fun.pop();
        fun.push(dataval);
      }, 3000);
      this.message = "";
    }
  }

  btnFunction(event) {
    if(event.keyCode == '13' && !event.shiftKey) {
      this.btnVal();
    }
  }
}
