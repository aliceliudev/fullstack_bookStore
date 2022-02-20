import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book.model';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  constructor(private bookService: BookService,
    )
    {

  }


  public books: Book[]=[];
  private getBooks(): void {
    this.bookService.getBooks().then(response =>{this.books = response});
    console.log(this.books[4]);

  }

  ngOnInit(): void {
    this.getBooks();

  }



}
