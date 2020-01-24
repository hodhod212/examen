import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Logo from  './images/star.svg';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_live_DWVEO1rWT1qWle5i9ILzjKCT00xyhU1jyW';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Gothenburg Clothing'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;



//import Logo from  './images/star.svg';
//image={Logo}
//const publishableKey = 'pk_live_DWVEO1rWT1qWle5i9ILzjKCT00xyhU1jyW';