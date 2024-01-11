import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { GridDivComponent } from './grid-div/grid-div.component';
import { SliderDivComponent } from './slider-div/slider-div.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    BannerComponent,
    SliderDivComponent,
    GridDivComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  asset_img_list: Array<any> = [
    {
      imgsrc: 'assets/asset1.png',
    },
    {
      imgsrc: 'assets/asset2.png',
    },
    {
      imgsrc: 'assets/asset3.png',
    },
    {
      imgsrc: 'assets/asset4.png',
    },
    {
      imgsrc: 'assets/asset5.png',
    },
  ];

  billing_img_list: Array<any> = [
    {
      imgsrc: 'billing/billing1.png',
    },
    {
      imgsrc: 'billing/billing2.png',
    },
    {
      imgsrc: 'billing/billing3.png',
    },
    {
      imgsrc: 'billing/billing4.png',
    },
  ];

  accounts_img_list: Array<any> = [
    {
      imgsrc: 'accounts/account1.png',
    },
    {
      imgsrc: 'accounts/account2.png',
    },
    {
      imgsrc: 'accounts/account3.png',
    },
    {
      imgsrc: 'accounts/account4.png',
    },
  ];
  hrm_img_list: Array<any> = [
    {
      imgsrc: 'hr/hr1.png',
    },
    {
      imgsrc: 'hr/hr2.png',
    },
    {
      imgsrc: 'hr/hr3.png',
    },
    {
      imgsrc: 'hr/hr4.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
