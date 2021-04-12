import React from 'react'
import './CartItem.css'
import { useDataLayerValue } from './Datalayer';

function CartItem({id,title, cost, imgUrl, rating}) {
    const [{cart}, dispatch] = useDataLayerValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
        
    };

    return (
        <div className="cartitem">

            <img className='cartitem__image' src={imgUrl} alt='' />

           
            <div className="cartitem__info">
                <p className='cartitem__title'>{title}</p>
                <div className='cartitem__rating'>
                    {Array(rating).fill().map((_,i) => (<p>⭐</p>))}
                </div>
                <p className='cartitem__cost'>
                    <small>₹</small>
                    <strong>{cost}</strong>
                    </p>
                <button onClick={removeFromCart}>Remove from Cart</button>

            </div>
            
        </div>
    )
}

export default CartItem
