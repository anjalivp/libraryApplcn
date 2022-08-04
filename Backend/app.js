const express = require('express');
const BookData = require('./src/model/Bookdata');
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());
username="admin"
password="1234"

app.post('/login',(req,res) => {
  let userData=req.body

  if(!username){
    res.status(401).send('Invalid Username')
  } else
  if(password!==userData.password){
    res.status(401).send('Invalid Password')
  } else {
    let payload={subject:username+password}
    let token=jwt.sign(payload,'secretKey')
    res.status(200).send({token})
  }
  
})

app.get('/books',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS");
    
    BookData.find()
                .then(function(books){
                    res.send(books);
                });
});

app.get('/:id',(req,res) =>{
  const id=req.params.id;
  BookData.findOne({"_id":id})
  .then((book) => {
    res.send(book);
  });
})


app.put('/update',(req,res)=>{
    console.log(req.body)
    // id=req.body._id,
    book= req.body.book,
    author = req.body.author,
    genre = req.body.genre,
    imageUrl = req.body.imageUrl
   BookData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "book":book,
                                "author":author,
                                "genre":genre,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })
 
app.delete('/remove/:id',(req,res)=>{
 
   id = req.params.id;
   BookData.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })

 app.post('/insert',function(req,res){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS");
  console.log(req.body);
  var book={
    book:req.body.book.book,
    author:req.body.book.author,
    genre:req.body.book.genre,
    imageUrl:req.body.book.imageUrl,
  }
  var book=new BookData(book);
  book.save();

});

   

app.listen(3000, function(){
  console.log('listening to port 3000');
});

