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

import { FCM } from '@ionic-native/fcm/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebase = {
  apiKey: "AIzaSyD64aQ5uvIiG6EV8M0qxYkOEOvmNMaSC5E",
  authDomain: "ionic0208.firebaseapp.com",
  databaseURL: "https://banded-water-250305.firebaseio.com/",
  projectId: "banded-water-250305",
  storageBucket: "banded-water-250305.appspot.com",
  // messagingSenderId: "666620014031",
  appId: "1:672793430980:android:764d2cb7da3280eb"
 }

import { FcmService } from './provider/fcm.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalPageModule, FormsModule, IonicRatingModule, AngularFireModule.initializeApp(firebase), AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Firebase,
    FcmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
