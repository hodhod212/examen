import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { createStructuredSelector } from "reselect";
import { persistor, store } from "../../redux/store";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
function Paypal({ total }) {
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order) {
            const orderId = order.id;
            const paypalItem = store.getState().cart.cartItems;
            var paypalData = {
              pays: paypalItem,
              ID: orderId,
            };
            persistor.purge();
            window.location.href = "/success";
            await axios
              .post("http://localhost:5000/creates", paypalData)
              .then(() => console.log(""))
              .catch((err) => {
                console.error("");
              });
          } else {
            window.location.href = "/fail";
          }
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [total]);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(Paypal);
