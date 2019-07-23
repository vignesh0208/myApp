import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  homePage() {
    console.log("hello");
    this.router.navigateByUrl('/');
  }
  conversationPage() {
    console.log("hello working");
    this.router.navigateByUrl('/conversation');
  }
}
