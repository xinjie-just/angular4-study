import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() // Input 必须在 import 中引入
  rating: number;

  stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];  // 初始化 stars 属性
    for (let i = 1; i <= 5; i++) {
      /*
      *  下面这段代码的意思是：
      *  将一个 boolean 值添加到 stars 数组的后面。
      *  当 i 的值大于传进来的 stock 的属性的 rating 的值时，将返回 true,否则返回 false
      * */
      this.stars.push( i > this.rating);
    }
  }

}
