import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ServicesService } from "../services/services.service";

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tableData: any;
  dataReturned: any;
  constructor(public navCtrl: NavController, public modalController: ModalController, private servicesService: ServicesService) {
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
            // The color of the text.
            color: '#871b47',
            // The color of the text outline.
            auraColor: '#d799ae',
            // The transparency of the text.
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