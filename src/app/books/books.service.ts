import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { } 
getBooks(){
  return [
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
    {
      name: "The Art of Programming",
      author:"Donald E. KNUTH",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ArtOfComputerProgramming.svg/1200px-ArtOfComputerProgramming.svg.png",
      amount: 18300
      },
      {
        name:"Introduction To Algorithms",
        author:  "T Cormen",
        image:"https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg",
        amount: 1500
      },

  ];
 }
}
