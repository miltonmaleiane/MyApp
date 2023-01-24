import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  name:string = "Clean Code"
  author:string = "Robert C Martin"
  src:string = "https://m.media-amazon.com/images/I/51uO-K+V5dL._AC_SY1000_.jpg"

  name2 ="Pragmatic Programmer"
  author2 = "Andrew Hunt"
  src2 = "https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg"
}
