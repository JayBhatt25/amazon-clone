import { InsertEmoticonSharp } from '@material-ui/icons';
import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CartItem from './CartItem';
import { useDataLayerValue } from './Datalayer'
import './Payment.css'
import {numberFormat} from './Subtotal'
import {getCartTotal} from './reducer'
import axios from './axios'
import { db } from './firebase';

function Payment() {
    const [{cart, user},dispatch] = useDataLayerValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    const history = useHistory();

    useEffect(() => {
        const getClientSecret = async () => {

            // Axios library allows to interact with apis very easily ( i.e GET, POST etc.)
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    },[cart])
    console.log("Client secret is >>>", clientSecret)
    console.log('user is', user);
    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

        dispatch({
            type: 'EMPTY_CART'
        })
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                cart : cart,
                amount: paymentIntent.amount,
                created : paymentIntent.created
            })
            // paymentIntent = payment confirmation
            setSucceeded(true)
            setError(false)
            setProcessing(false)
            // We dont want user to comeback to payments page after payment, hence we replace the page instead of push.
            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ?  event.error.message:"");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h2>
                    Checkout(<Link to='/checkout'>{cart?.length} {cart?.length > 1 ? 'items' : 'item'}</Link>)
                </h2>
                <div className='payment__section'>
                    <div className='payment__sectionTitle'>
                        <h3>Delivery address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Kandivali (E), Mumbai</p>
                        <p>Maharashtra</p>

                    </div>
                </div>

                    <div className='payment__section'>
                        <div className='payment__sectionTitle'>
                            <h3>Reviw items and delivery</h3>
                        </div>
                        <div className='payment__cartItems'>

                            {cart?.map(item => (
                                <CartItem 
                                id= {item.id} 
                                title={item.title} 
                                cost={item.cost} 
                                imgUrl={item.imgUrl} 
                                rating={item.rating} />
                            ))}
                            

                        </div>
                    </div>

                    <div className='payment__section'>
                        <div className='payment__sectionTitle'>
                            <h3>Payment Method</h3>
                        </div>
                        <div className='payment__details'>
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />

                                <div className='payment__costContainer'>
                                    <h3>Order total : {numberFormat(getCartTotal(cart))}</h3>

                                </div>

                                {/* Button disabled based on 3 conditions */}

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy now'}</span>
                                </button>

                                {/* Error */}
                                {error ? <div>{error}</div> : "" }
                            </form>
                            
                            

                        </div>
                    </div>


            </div>
            
        </div>
            
        
        
    )
}

export default Payment 
