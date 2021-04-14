import { InsertEmoticonSharp } from '@material-ui/icons';
import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useDataLayerValue } from './Datalayer'
import './Payment.css'
import {numberFormat} from './Subtotal'
import {getCartTotal} from './reducer'

function Payment() {
    const [{cart, user}] = useDataLayerValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

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
