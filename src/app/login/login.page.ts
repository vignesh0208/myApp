import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: any;
  email: any;
  password: any;
  value: any;
  valueD: any;
  valueE: any;
  sucess: any;
  fb_token: any;
  fb_id: any;
  constructor(private http: HttpClient, private router: Router, public navCtrl: NavController, public fb: Facebook) { }

  ngOnInit() {
  }

  loginForm() {
    this.login= {
      email: this.email,
      pwd: this.password
    }
    // console.log(this.login);
    // console.log(this.email, this.password);
    this.http.get('http://192.168.0.157:8181/login/'+this.login.email+'/'+this.login.pwd, this.login).subscribe(data => {
      this.value= data;
      console.log(this.value.success);
      if(this.value.success == true) {
        this.router.navigateByUrl('/home');
        console.log(this.login)
      }
    }, err => {
      this.valueE= err;
      console.log(err)
    });
    // this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
    //   this.valueD= data;
    //   console.log(this.valueD.title);
    // }, err => {
    //   console.log(err)
    // });
  }


  loginAction() {
      // Login with permissions
      this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
      .then( (res: FacebookLoginResponse) => {

          // The connection was successful
          if(res.status == "connected") {

              // Get user ID and Token
              this.fb_id = res.authResponse.userID;
              this.fb_token = res.authResponse.accessToken;

              // Get user infos from the API
              this.fb.api("/me?fields=name,gender,birthday,email,photos", []).then((user) => {
                    // Get the connected user details
                    this.sucess= {
                        'id': user.id,
                        'gender': user.gender,
                        'birthday': user.birthday,
                        'name': user.name,
                        'email': user.email,
                        'image': user.photos
                    }
                    // => Open user session and redirect to the next page
              });

          } 
          // An error occurred while loging-in
          else {

              console.log("An error occurred...");
                this.sucess= "i am  not working"
          }

      })
      .catch((e) => {
          console.log('Error logging into Facebook', e);
      });
  }

}
