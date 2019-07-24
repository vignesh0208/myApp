import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../../services/services.service";

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.scss'],
})
export class ChatpageComponent implements OnInit {

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {}

}
