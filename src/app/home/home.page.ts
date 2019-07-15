import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

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

}