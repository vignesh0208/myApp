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
  public locationAddress: any;
  botAgent= false;
  colorList = [
    {name:'bot', active:true, disabled:true},
    {name:'agent', active:false, disabled:false},
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
      val.disabled= true;
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
      val.active= true;
      val.disabled= true;
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

  ionViewDidEnter() {
    var latlng = new google.maps.LatLng(this.dataValue.lat, this.dataValue.lng)
    var mapProp = {
      center: latlng,
      zoom: 15,
      panControl:false,
      zoomControl:false,
      mapTypeControl:false,
      scaleControl:false,
      streetViewControl:false,
      overviewMapControl:false,
      rotateControl:false,
      draggable: false,
      fullscreenControl: false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapProp);
    var marker = new google.maps.Marker({
      position:latlng,
    });
    marker.setMap(this.map);
    var geocoder = geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          this.locationAddress = results[1].formatted_address;
        }
      }
    });
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    document.getElementById("mySidenav").style.visibility = "visible"
    document.getElementById("addIndex").style.zIndex = "1";
    document.getElementById("addIndex").style.opacity = "0.4";
    document.getElementById("addIndex-1").style.opacity = "0.4";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("mySidenav").style.visibility = "hidden"
    document.getElementById("addIndex").style.zIndex = "inherit";
    document.getElementById("addIndex").style.opacity = "1";
    document.getElementById("addIndex-1").style.opacity = "1";
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
