import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-div',
  standalone: true,
  imports: [],
  templateUrl: './grid-div.component.html',
  styleUrl: './grid-div.component.scss',
})
export class GridDivComponent implements OnInit {
  @Input() img_list: any = '';

  constructor() {}
  ngOnInit(): void {}
  ngOnChanges() {
    console.log(this.img_list);
  }
}
