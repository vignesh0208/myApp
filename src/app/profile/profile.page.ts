import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'
import { ServicesService } from "../services/services.service";

declare var google;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public id: any;
  public dataValue: any;
  public messages: any;
  public message: any;
  public show: any;
  map: any;
  botAgent= false;
  colorList = [
    {name:'bot', active:true},
    {name:'agent', active:false},
  ];
  public color: any;
  constructor(public navCtrl: NavController, private route: ActivatedRoute, private servicesService: ServicesService) {  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getValueInfo();
  }

  botAgentval(val) {
    if(val.name == "bot") {
      val.active= true;
      this.colorList[1].active= false;
      this.botAgent= false;
      var botActive = {
        charRoomID: this.id,
        message: "Switched back to Bot",
        name: "botAgent",
        senderType: "bot-agent"
      };
      this.servicesService.messages.push(botActive);
    }
    else {
      val.active= true
      this.colorList[0].active= false;
      this.botAgent= true;
      var agentActive = {
        charRoomID: this.id,
        message: "Switched on to Live Agent",
        name: "botAgent",
        senderType: "bot-agent"
      };
      this.servicesService.messages.push(agentActive);
    }
  }
  
  getValueInfo() {
    this.dataValue = this.servicesService.getIdnumValue(this.id);
  }

  ionViewDidEnter(){
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });
  }

  // bot() {
  //   this.botAgent= false;
  //   var botActive = {
  //     charRoomID: this.id,
  //     message: "Switched back to Bot",
  //     name: "botAgent",
  //     senderType: "bot-agent"
  //   };
  //   this.servicesService.messages.push(botActive);
  // }

  // agent() {
  //   this.botAgent= true;
  //   var agentActive = {
  //     charRoomID: this.id,
  //     message: "Switched on to Live Agent",
  //     name: "botAgent",
  //     senderType: "bot-agent"
  //   };
  //   this.servicesService.messages.push(agentActive);
  // }

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
