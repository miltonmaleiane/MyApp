import { Component } from '@angular/core';
interface Book{
  name : string;
  author : string;
  image:string;
  amount: number;
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  books:Book[] = [
    {
    name: "clean code",
    author:"robert c martin",
    image:"https://m.media-amazon.com/images/I/51uO-K+V5dL._AC_SY1000_.jpg",
    amount: 350
    },
    {
      name:"pragmatic programmer",
      author:  "andrew hunt",
      image:"https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg",
      amount: 89.99
    },
    

  ]
  



  isDisabled:boolean = false;
  isDisabled2:boolean = false;
  showBooks: boolean = true;
  isShowing: boolean = false;

  handleClick(){
    this.isDisabled = true; 
   // alert("Button disabled ")
  }
  toggleBooks(){

   }
   
  myName: string =""
  
}


