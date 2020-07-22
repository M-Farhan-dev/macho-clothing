import React from 'react';
import './stripe-button.styles.scss';

import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton= ({price})=>{
const priceForStripe=price*100;
const publishableKey='pk_test_51H7gJIIzAa3HtEWdDltMidDtnxPnteLGnEiVdY9ZZhlEvjnWwXEClrjbnpcZZMDHOAfSvfJrLQfTizn4yWToR1Pc0061YUN2zM';

const onToken=token=>
{
    console.log(token);
    alert('Payment Successful');
}

return(
    <StripeCheckout
    label='Pay Now'
    name='MACHO CLOTHING Ltd.'
    billingAddress
    shippingAddress
    image='http://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
);
};

export default StripeCheckoutButton;