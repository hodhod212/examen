import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { persistor, store } from "../../redux/store";

const StripeCheckoutButton = ({ price }) => {
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
        const myItems = store.getState().cart.cartItems;
        var cartdata = {
          elements: myItems,
        };
        persistor.purge();
        window.location.href = "/success";
        await axios
          .post("http://localhost:5000/create", cartdata)
          .then(() => console.log(""))
          .catch((err) => {
            console.error("");
          });
      })
      .catch((error) => {
        console.log("Payment Error: ", error);

        window.location.href = "/fail";
      });
  };
  return (
    <>
      <StripeCheckout
        label="Pay by Stripe"
        name="Gothenburg Clothing"
        billingAddress
        shippingAddress
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
