interface BookStatus{

  stat: string;
    rating: number;
    discount: string;
    bookform: string;
}


export class Book {
  _id: string;
  imgName: string;
  name: string;
  author: string;
  price: string;
bookStatus:BookStatus[];


  constructor(id: string,
    imgName: string,
    name: string,
    author: string,
    price: string,
    bookStatus:BookStatus[]) {
    this._id = id;
    this.imgName = imgName;
    this.name = name;
    this.author = author;
    this.price = price;
    this.bookStatus=bookStatus;
  }


}


