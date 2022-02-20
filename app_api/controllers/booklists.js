const mongoose = require('mongoose');
const Book = mongoose.model('Book');
var sendJSONResonse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

const getBooks = function(req, res) {
    Book.find().exec(function(err, bookdata) {
        if (err) {
            sendJSONResonse(res, 404, err);
            return;
        } else {
            sendJSONResonse(res, 200, bookdata)
        }
    });

};
const getSingleBook = function(req, res) {
    if (req.params && req.params.bookid) {
        Book
            .findById(req.params.bookid)
            .exec((err, bookdata) => {
                if (!bookdata) {
                    sendJSONResonse(res, 404, "bookid not found");
                    return;
                } else if (err) {
                    sendJSONResonse(res, 404, err);
                    return;
                } else {
                    sendJSONResonse(res, 200, bookdata);
                    console.log("00000", bookdata);

                }
            });
    } else {
        sendJSONResonse(res, 404, "No bookid in request!");
    }
};
const updateBook = function(req, res) {
    if (!req.params.bookid) {
        sendJSONResonse(res, 404, "Not found, bookid is required!");
        return;
    }
    Book.findById(req.params.bookid)
        .exec((err, bookdata) => {
            if (!bookdata) {
                sendJSONResonse(res, 404, "bookid not found!");
                return;
            } else if (err) {
                sendJSONResonse(res, 400, err);
            }
            bookdata.imgName = req.body.imgName;
            bookdata.name = req.body.name;
            bookdata.author = req.body.author;
            bookdata.price = req.body.price;
            bookdata.bookStatus = [{
                    stat: req.body.bookStatus[0].stat,
                    rating: req.body.bookStatus[0].rating,
                    discount: req.body.bookStatus[0].discount,
                    bookform: req.body.bookStatus[0].bookform
                },
                {
                    stat: req.body.bookStatus[1].stat,
                    rating: req.body.bookStatus[1].rating,
                    discount: req.body.bookStatus[1].discount,
                    bookform: req.body.bookStatus[1].bookform
                }
            ];
            bookdata.save((err, bookdata) => {
                if (err) {
                    sendJSONResonse(res, 404, err);
                } else {
                    sendJSONResonse(res, 200, bookdata);
                }
            });

        });
};
const createBook = function(req, res) {
    console.log('posted data: ', req.body);
    const postdata = {
        name: req.body.name,
        imgName: req.body.imgName,
        author: req.body.author,
        price: req.body.price,
        bookStatus: req.body.bookStatus
    };
    Book.create(postdata, (err, bookdata) => {
        if (err) {
            sendJSONResonse(res, 500, err);
        } else {
            sendJSONResonse(res, 200, bookdata);
        }

    });
};
const deleteBook = function(req, res) {
    const bookid = req.params.bookid;
    if (bookid) {
        Book
            .findByIdAndRemove(bookid)
            .exec((err, bookdata) => {
                if (err) {
                    sendJSONResonse(res, 404, err);
                    return;
                }
                sendJSONResonse(res, 204, null);
            });
    } else {
        sendJSONResonse(res, 404, "No bookid");
    }

};

module.exports = {
    getBooks,
    createBook,
    getSingleBook,
    updateBook,
    deleteBook
};