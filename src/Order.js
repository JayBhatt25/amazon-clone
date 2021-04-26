import React from 'react'
import './Order.css'
import moment from 'moment'
import Checkout from './Checkout'
import CartItem from './CartItem'
import { numberFormat } from './Subtotal'
function Order({order}) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {order.data.cart?.map(item => (
                 <CartItem id={item.id} 
                 title={item.title} 
                 cost={item.cost} 
                 imgUrl={item.imgUrl} 
                 rating={item.rating}
                 hidden={true} />
            ))}

            <h3 className='order__total'>Order total: {numberFormat(order.data.amount / 100)}</h3>
        </div>
    )
}

export default Order
