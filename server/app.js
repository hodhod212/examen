const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const fs = require("fs");
const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: "http://localhost:3002",
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let books = [];

app.get("/home", function (req, res) {
  console.log("Inside Home Login");
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  console.log("Books : ", JSON.stringify(books));
  res.end(JSON.stringify(books));
});

app.post("/create", function (req, res) {
  const newBook = {
    Amount: req.body.Amount,
    Name: req.body.Name,
    City: req.body.City,
    Country: req.body.Country,
    Address: req.body.Address,
    Postnumber: req.body.Postnumber,
    Brand: req.body.Brand,
    Source_Country: req.body.Country,
  };
  books.push(newBook);
  console.log(books);
});

//start your server on port 3001
app.listen(5001, () => {
  console.log("Server Listening on port 5001");
});
