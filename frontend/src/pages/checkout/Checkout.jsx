import React from 'react';
import { useFormik } from 'formik';
import './Checkout.css';
import Button from '../../components/utils/Button';
import { Helmet } from 'react-helmet';
import { checkoutSchema } from '../../schemas/CheckoutSchema';
import {toast} from 'react-toastify'
function Checkout() {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
      cardName: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
    toast.success("Order placed successfully!");
    },
  });

  return (
    <>
         <Helmet>
        <title>Checkout</title>
        <meta name="description" content="Checkout application" />
    </Helmet>

      <div className="checkout-page">
        <div className="checkout-container">
          <h2>Checkout</h2>
          <form onSubmit={formik.handleSubmit} className="checkout-form">
            <h3>Delivery Address</h3>

            <input type="text" name="fullname" placeholder="Full Name" {...formik.getFieldProps('fullname')} />
            {formik.touched.fullname && formik.errors.fullname && <div className="error">{formik.errors.fullname}</div>}

            <input type="text" name="address" placeholder="Address" {...formik.getFieldProps('address')} />
            {formik.touched.address && formik.errors.address && <div className="error">{formik.errors.address}</div>}

            <input type="text" name="city" placeholder="City" {...formik.getFieldProps('city')} />
            {formik.touched.city && formik.errors.city && <div className="error">{formik.errors.city}</div>}


            <input type="text" name="country" placeholder="Country" {...formik.getFieldProps('country')} />
            {formik.touched.country && formik.errors.country && <div className="error">{formik.errors.country}</div>}

            <h3>Payment Details</h3>


            <input type="number" name="cardNumber" placeholder="Card Number" maxLength="16" {...formik.getFieldProps('cardNumber')} />
            {formik.touched.cardNumber && formik.errors.cardNumber && <div className="error">{formik.errors.cardNumber}</div>}

            <div className="row">
              <input className='cardcvv' type="text" name="expiry" placeholder="MM/YY" maxLength="5" {...formik.getFieldProps('expiry')} />
              <input className='carddate' type="number" name="cvv" placeholder="CVV" maxLength="4" {...formik.getFieldProps('cvv')} />
            </div>
            <div className="row">
              {formik.touched.expiry && formik.errors.expiry && (
                <div className="error small-error">{formik.errors.expiry}</div>
              )}
              {formik.touched.cvv && formik.errors.cvv && (
                <div className="error small-error">{formik.errors.cvv}</div>
              )}
            </div>

            <Button type="submit" className="checkout-btn">Place Order</Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
