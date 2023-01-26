import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  implements  OnInit{
  constructor(private cartService: CartService){
   
  }
  
  @Input() book:Book = {} as Book;

  myInterval:any = null;   
  addToCart(){
    this.cartService.add(this.book)
   //this.bookEmitter.emit(this.book)
  }
  
  ngOnInit(): void {
   this.myInterval= setInterval(()=>{
      console.log("Hello")
   },1000)
  }
}
