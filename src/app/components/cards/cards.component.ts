import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../../services/services.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {}

}
