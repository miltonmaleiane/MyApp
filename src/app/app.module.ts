import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksModule } from './books/books.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './books/book/book.component';
import { BooksService } from './books/books.service';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
  ],
  imports: [ BrowserModule, FormsModule, BooksModule  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
