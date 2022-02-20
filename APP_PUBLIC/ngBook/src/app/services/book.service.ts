import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../book.model';
import 'rxjs/add/operator/toPromise';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'http://localhost:3000/api/list';
  constructor(private http: HttpClient) { }

  public getBooks(): Promise<Book[]> {

    return this.http
      .get(this.booksUrl)
      .toPromise()
      .then(response => response as Book[])
      .catch(this.handleError);

  }

  public getSingleBook(bookId: string | null): Promise<Book> {
    const url: string = `${this.booksUrl}/${bookId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Book)
      .catch(this.handleError);
  }

  public createBook(newBook: Book): Promise<Book> {

    return this.http
      .post(this.booksUrl, newBook)
      .toPromise()
      .then(response => response as Book)
      .catch(this.handleError);
  }

  public deleteABook(bookId: String): Promise<Book>{
    const url: string = `${this.booksUrl}/${bookId}`;
    return this.http
      .delete(url)
      .toPromise()
      .then(response => {
      console.log('Deleted!');
      })
      .catch(this.handleError);
  }

  public updateBook(newBook:Book): Promise<Book>{
    console.log(newBook);
    const url: string = `${this.booksUrl}/${newBook._id}`;
       return this.http
      .put(url, newBook)
      .toPromise()
      .then(response=> {
        response as Book;
        console.log(response);
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }




}
