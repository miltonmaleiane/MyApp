import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{
  constructor (private booksService: BooksService){
  }
  
  
  books:Book[] =[] ;
  
  
  
  card: Book[]=[];
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
  
  addToCard(book:Book){
    console.log(book)
  }
  
  myName: string =""
  
  ngOnInit(): void {
     this.books = this.booksService.getBooks()
  }
}


