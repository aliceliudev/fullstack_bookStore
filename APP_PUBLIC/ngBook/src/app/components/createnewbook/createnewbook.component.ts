import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book.model';
import { BookService } from 'src/app/services/book.service';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-createnewbook',
  templateUrl: './createnewbook.component.html',
  styleUrls: ['./createnewbook.component.css'],
  providers: [BookService]
})
export class CreatenewbookComponent implements OnInit {

  public newBook: Book = {
    _id: '',
    imgName: '',
    name: '',
    author: '',
    price: '',
    bookStatus: [
      {
        stat: '',
        rating: 0,
        discount: '',
        bookform: ''

      },
      {
        stat: '',
        rating: 0,
        discount: '',
        bookform: ''
      }
    ]
  };


  constructor(
    private bookService: BookService,
    private route: Router

  ) { }

  ngOnInit(): void {

  }


  public createNewBook(newBook: Book): void {
    if (newBook.name && newBook.author && newBook.imgName && newBook.price
      && newBook.bookStatus[0].stat && newBook.bookStatus[0].bookform && newBook.bookStatus[0].rating && newBook.bookStatus[0].discount
      && newBook.bookStatus[1].stat && newBook.bookStatus[1].bookform && newBook.bookStatus[1].rating && newBook.bookStatus[1].discount
    ) {
      // console.log(this.newBook);
      this.bookService.createBook(newBook);
      this.route.navigate(["booklist"]);
    }
    else{
      alert("Missing Info");
      this.route.navigate(['createnewbook']);
    }

  }

}
