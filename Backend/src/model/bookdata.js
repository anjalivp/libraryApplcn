const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryDB');
const Schema = mongoose.Schema

var NewBookSchema = new Schema({
    book: {type: String},
    author: {type: String},
    genre: {type: String},
    imageUrl: {type:String}
});

var Bookdata = mongoose.model('book',NewBookSchema);


module.exports = Bookdata;