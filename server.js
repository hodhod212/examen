const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const fs = require("fs");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let bks = [];
let jsonElement;
let bk = [];
let paypalElement;
let orderElement;
app.get("/home", function (req, res) {
  console.log("Inside Home Login");
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(bks));
});
app.post("/creates", function (req, res) {
  for (var i in req.body.pays) {
    id = req.body.pays[i].id;
    name = req.body.pays[i].name;
    price = req.body.pays[i].price;
    quantity = req.body.pays[i].quantity;
    paypalElement = {
      id,
      name,
      quantity,
      price,
    };

    bk.push(paypalElement);
  }
  orderElement = {
    orderId: req.body.ID,
  };
  bk.push(orderElement);
  fs.writeFileSync("paypal.json", JSON.stringify(bk), (error) => {
    if (error) {
      throw error;
    }
  });
});

app.post("/create", function (req, res) {
  for (var i in req.body.elements) {
    id = req.body.elements[i].id;
    name = req.body.elements[i].name;
    price = req.body.elements[i].price;
    quantity = req.body.elements[i].quantity;
    jsonElement = {
      id,
      name,
      quantity,
      price,
    };
    bks.push(jsonElement);
  }
  fs.writeFileSync("message.json", JSON.stringify(bks), (error) => {
    if (error) {
      throw error;
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw "";
  console.log("Server running on port " + port);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      const order = {
        tokenId: req.body.token.id,
      };
      bks.push(order);
      res.status(200).send({ success: stripeRes });
    }
  });
});
