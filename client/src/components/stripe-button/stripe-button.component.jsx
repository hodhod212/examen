import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Logo from "./images/star.svg";
const StripeCheckoutButton = ({ price }) => {
  let [responseData, setResponseData] = React.useState("");
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HPp21Ei9eadDgdeQQALFAL0uIku87FMAqdgiSMrxrqVKjSHTZhcSnLgMAA348RbP2oLk5LZC4UNw07B5Df2llAJ00N0tIBFag";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then(async (response) => {
        alert("succesful payment");
        setResponseData(response.data);
        console.log("response", response.data);
        const book = {
          Amount: response.data.success.amount,
          Name: response.data.success.source.name,
          City: response.data.success.source.address_city,
          Country: response.data.success.source.address_country,
          Address: response.data.success.source.address_line1,
          Postnumber: response.data.success.source.address_zip,
          Brand: response.data.success.source.brand,
          Source_Country: response.data.success.source.country,
        };
        await axios
          .post("http://localhost:5001/create", book)
          .then(() => console.log(book))
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };
  return (
    <>
      <StripeCheckout
        label="Pay by Stripe"
        name="Gothenburg Clothing"
        billingAddress
        shippingAddress
        image={Logo}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay by Stripe"
        token={onToken}
        stripeKey={publishableKey}
      />
    </>
  );
};

export default StripeCheckoutButton;
