import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks: Array<Stock>; // 这里声明为 public 属性，因为后面在该类外面要使用，stocks 的值为一个数组类型

  constructor() { }

  ngOnInit() {
    /*
    * 下面为 stocks 数组赋值，值为数组类型；
    * 分别实例化 Stock 类，为 stocks 数组赋不同值
    * */
    this.stocks = [
      new Stock(1, '第一支股票', 1.99, 2.5, '这是我学习慕课网Angular4入门实战中创建的第一支股票', ['IT', '互联网', '金融']),
      new Stock(2, '第二支股票', 2.99, 4.2, '这是我学习慕课网Angular4入门实战中创建的第二支股票', ['IT', '互联网']),
      new Stock(3, '第三支股票', 3.99, 2.2, '这是我学习慕课网Angular4入门实战中创建的第三支股票', ['IT', '金融']),
      new Stock(4, '第四支股票', 4.99, 5.0, '这是我学习慕课网Angular4入门实战中创建的第四支股票', ['互联网', '金融']),
      new Stock(5, '第五支股票', 5.99, 3.5, '这是我学习慕课网Angular4入门实战中创建的第五支股票', ['金融']),
      new Stock(6, '第六支股票', 6.99, 4.5, '这是我学习慕课网Angular4入门实战中创建的第六支股票', ['IT']),
      new Stock(7, '第七支股票', 7.99, 2.0, '这是我学习慕课网Angular4入门实战中创建的第七支股票', ['互联网']),
      new Stock(8, '第八支股票', 8.99, 3.2, '这是我学习慕课网Angular4入门实战中创建的第八支股票', ['IT', '互联网', '金融'])
    ];
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string> // 类型为一个数组类型，尖括号"<>"是一种泛型写法，指定该数组的类型只能是字符串型
  ) {}
}
