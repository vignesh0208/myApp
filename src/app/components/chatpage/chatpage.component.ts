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
    console.log(this.message);
  }
}
