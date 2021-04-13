import React from 'react'
import './Checkout.css'
import { useDataLayerValue } from './Datalayer'
import Subtotal from './Subtotal'
import {getCartTotal} from './reducer'
import Product from './Product'
import CartItem from './CartItem'
import FlipMove from 'react-flip-move'

function Checkout() {
    const [{cart}, dispatch] = useDataLayerValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' 
                src='https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Mentalist/en_us-hero_in_mentalist-3000-600._UR3000,600_SX1500_FMwebp_.jpg'>

                </img>

                <div>
                    <h2 className='checkout__title'>Your Shopping Cart</h2>
                   
                        {cart?.map(item => (

                        <CartItem id={item.id} 
                        title={item.title} 
                        cost={item.cost} 
                        imgUrl={item.imgUrl} 
                        rating={item.rating} />

                        ))}

                   
                   
                    

                </div>
               

            </div>

            <div className='checkout__right'>
                <Subtotal value={getCartTotal(cart)} />

            </div>
            
        </div>
    )
}

export default Checkout
