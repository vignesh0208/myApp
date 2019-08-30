import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController, ToastController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ServicesService } from "../services/services.service";

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tableData: any;
  dataReturned: any;
  toast: any;
  user: any = {};
  fun: any;
  userData: any;
  error: any;
  value: any;
  isLoggedIn:boolean = false;
  constructor(public navCtrl: NavController, public modalController: ModalController, private servicesService: ServicesService, public toastCtrl: ToastController, public alertCtrl: AlertController, private googlePlus: GooglePlus, private facebook: Facebook, private http: HttpClient) {
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
    this.glogin();

    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
      this.value= data;
      console.log(this.value);
    }, err => {
      console.log(err)
    });
    // this.http.post('http://localhost:3100/posts/'+this.data.name, this.data).subscribe(response => {
    //   console.log('send: '+ response )
    // },err => {
    //   console.log('error: '+ err); 
    // });
  }

  glogin() {
    this.fun = "done";
    this.googlePlus.login({
      'scopes': 'authResult',
		  'webClientId': '861398522031-9qj6t451fginnhq3tcpb8bkasfk6g21p.apps.googleusercontent.com',
		  'offline': true
    }).then(res => {
      console.log(res);
      this.fun = res;
    }).catch(err => {
      console.error(JSON.stringify(err));
      this.fun = "fail"
      this.fun = err;
    });
  }
  
  loginwithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,frist_name,picture.width(720).height(720).as(picture_larger)', []).then(profile => {
        this.userData = {email: profile['email'], frist_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']};
      })
    })
    this.facebook.login(['email', 'public_profile']).catch(err => {
      this.error = err;
    });
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