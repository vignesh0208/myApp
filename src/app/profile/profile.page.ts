import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from "../services/services.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public id: any;
  public dataValue: any;
  public messages: any;
  constructor(private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getValueInfo()
}

  getValueInfo() {
      this.dataValue = this.servicesService.getIdnumValue(this.id);
  }

}
