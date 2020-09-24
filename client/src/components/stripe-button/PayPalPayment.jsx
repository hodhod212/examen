import React, { useState } from "react";
import PayPal from "./PayPal";
function PayPalPayment() {
  const [checkout, setCheckout] = useState(false);

  return (
    <div>
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckout(true);
          }}
        >
          Pay by PayPal
        </button>
      )}
    </div>
  );
}

export default PayPalPayment;
