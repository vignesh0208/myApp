import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'
import { ServicesService } from "../../services/services.service";
import { ProfilePageModule } from "../../profile/profile.module"

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.scss'],
})
export class ChatpageComponent implements OnInit {
  public id: any;
  public message: any;
  public show: any;
  constructor(public navCtrl: NavController, private route: ActivatedRoute, private servicesService: ServicesService, private profilePage: ProfilePageModule) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  btnVal() {
    var fun = this.servicesService.messages;
    var datavalue = {
      charRoomID: this.id,
      message: this.message.trim(),
      name: "Vicky",
      senderType: "user"
    };
    var loading = {
      charRoomID: this.id,
      message: "",
      name: "Loading",
      senderType: "bot"
    }
    var dataval = {
      charRoomID: this.id,
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
