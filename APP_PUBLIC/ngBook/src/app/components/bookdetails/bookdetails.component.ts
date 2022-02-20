import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/book.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css'],

})
export class BookdetailsComponent implements OnInit {

  public editBookForm:boolean = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private route2:Router,
  ) { }

  public aBook: Book={
    _id: '',
    imgName: '',
    name: '',
    author:'',
    price:'',
    bookStatus:[
      {
        stat:'',
        rating:0,
        discount:'',
        bookform:''

      },
      {
        stat:'',
        rating:0,
        discount:'',
        bookform:''
      }
    ]
  };


  ngOnInit(): void {

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id: string | null = params.get('bookId');
          return this.bookService.getSingleBook(id);
        })
      ).subscribe((newBook: Book) => {
        this.aBook = newBook;
      });
  }

  public deleteBook(bookId: string) {
    this.bookService.deleteABook(bookId);
    this.route2.navigate(["booklist"]);
  }

  public showEditForm() {

    this.editBookForm =true;


  }

  public editTheBook(editingBook:Book){

    if(editingBook.name && editingBook.author && editingBook.imgName && editingBook.price
      && editingBook.bookStatus[0].stat && editingBook.bookStatus[0].bookform && editingBook.bookStatus[0].rating && editingBook.bookStatus[0].discount
      && editingBook.bookStatus[1].stat && editingBook.bookStatus[1].bookform && editingBook.bookStatus[1].rating && editingBook.bookStatus[1].discount
      )
    {
    this.bookService.updateBook(editingBook);
    this.route2.navigate(['booklist/'+editingBook._id]);
    this.editBookForm=false;
    }
    else{
      alert("Missing Info");
      this.route2.navigate(['booklist/'+editingBook._id]);
    }
  }

}
