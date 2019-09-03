import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  loginForm() {
    this.login= {
      email: this.email,
      pwd: this.password
    }
    // console.log(this.login);
    // console.log(this.email, this.password);
    this.http.get('http://192.168.0.157:3100/posts/'+this.login.email+'/'+this.login.pwd, this.login).subscribe(data => {
      this.value= data;
      console.log(this.value.success);
      if(this.value.success == true) {
        this.router.navigateByUrl('/home');
        console.log(this.login)
      }
    }, err => {
      console.log(err)
    });
    // this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
    //   this.valueD= data;
    //   console.log(this.valueD.title);
    // }, err => {
    //   console.log(err)
    // });
  }

}
