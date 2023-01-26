import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  implements  OnInit{
  
  @Input() book:Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();
  myInterval:any = null;   
  addToCard(){
   this.bookEmitter.emit(this.book)
  }
  
  ngOnInit(): void {
   this.myInterval= setInterval(()=>{
      console.log("Hello")
   },1000)
  }
  constructor(){
   
  }
}
