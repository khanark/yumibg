import * as AOS from 'aos';

import { Component, OnInit } from '@angular/core';

import { pageContent } from 'src/app/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeContent = pageContent.home;
  ngOnInit(): void {
    AOS.init({
      once: true,
      duration: 700,
      offset: 100,
    });
  }
}
