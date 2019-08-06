import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ServicesService } from "../services/services.service";

import { FcmService } from '../provider/fcm.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tableData: any;
  dataReturned: any;
  constructor(public navCtrl: NavController, public modalController: ModalController, private servicesService: ServicesService, public fcm: FcmService, public toastCtrl: ToastController) {
    this.tableData = [
      { 'keywordsUsed': 'need', 'total': '7', 'usage': '26.92' },
      { 'keywordsUsed': 'more', 'total': '7', 'usage': '26.92' },
      { 'keywordsUsed': 'train', 'total': '6', 'usage': '23.08' },
      { 'keywordsUsed': 'information', 'total': '6', 'usage': '23.08' },
      { 'keywordsUsed': 'yes', 'total': '6', 'usage': '19.23' },
      { 'keywordsUsed': 'book', 'total': '5', 'usage': '19.23' },
      { 'keywordsUsed': 'ticket', 'total': '4', 'usage': '15.38' },
      { 'keywordsUsed': 'fastest', 'total': '4', 'usage': '15.38' },
      { 'keywordsUsed': 'in', 'total': '4', 'usage': '11.54' },
      { 'keywordsUsed': 'india', 'total': '3', 'usage': '11.54' },
      { 'keywordsUsed': 'tatkal', 'total': '3', 'usage': '7.69' }
    ]
  }

  lineChartData;

  ngOnInit() {
    this.useAngularLibrary();
  }

  ionViewDidLoad() {
    this.fcm.getToken()
    this.fcm.listenToNotifications().pipe(
      tap(msg => {
        var toast = this.toastCtrl.create({
          message: msg.body,
          duration: 3000
        });
        toast.present();
      })
    )
    .subscribe()
  }

  useAngularLibrary() {
    this.lineChartData = {
      chartType: 'LineChart',
      dataTable: [
        ['Day', 'Views'],
        ['10-Jul-2019', 30],
        ['11-Jul-2019', 25],
        ['12-Jul-2019', 11],
        ['13-Jul-2019', 11],
        ['14-Jul-2019', 8],
        ['15-Jul-2019', 7]
      ],
      options: {
        annotations: {
          textStyle: {
            fontName: 'Times-Roman',
            fontSize: 18,
            bold: true,
            italic: true,
            color: '#871b47',
            auraColor: '#d799ae',
            opacity: 0.8
          }
        }
      }
    };
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
}