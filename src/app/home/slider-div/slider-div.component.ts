import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-slider-div',
  standalone: true,
  imports: [],
  templateUrl: './slider-div.component.html',
  styleUrl: './slider-div.component.scss',
})
export class SliderDivComponent implements OnInit {
  @Input() img_list: any = '';

  constructor() {}

  ngOnInit(): void {}
}
