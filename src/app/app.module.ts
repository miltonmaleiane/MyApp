import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksModule } from './books/books.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

import { BookComponent } from './books/book/book.component';
import { BooksService } from './books/books.service';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
  ],
  imports: [ BrowserModule, BooksModule,AppRoutingModule,AuthModule,FormsModule, ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
