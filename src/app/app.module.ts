import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalPageModule } from './modal/modal.module';
import { IonicRatingModule } from 'ionic4-rating';

import { Firebase } from '@ionic-native/firebase/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebase = {
  apiKey: "AIzaSyCS8wBJue6GWpWisN-9dhvt1xqW_Eb3ByE",
  authDomain: "ionic0208.firebaseapp.com",
  databaseURL: "https://ionic0208.firebaseio.com",
  projectId: "ionic0208",
  storageBucket: "ionic0208.appspot.com",
  messagingSenderId: "666620014031",
  appId: "1:666620014031:web:abc0c1019bde6175"
 }

import { FcmService } from './provider/fcm.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalPageModule, FormsModule, IonicRatingModule, AngularFireModule.initializeApp(firebase), AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Firebase,
    FcmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
