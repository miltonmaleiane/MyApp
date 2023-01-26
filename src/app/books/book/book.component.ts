import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
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
  isInCart :boolean = false;
  myInterval:any = null;   
  addToCart(){
    this.cartService.add(this.book)
    this.isInCart = true;
   //this.bookEmitter.emit(this.book)
  }
  
  ngOnInit(): void {
   this.myInterval= setInterval(()=>{
      console.log("Hello")
   },1000)
  }
  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
