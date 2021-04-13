import React from 'react'
import './Subtotal.css'
import { useDataLayerValue } from './Datalayer';


const numberFormat = (valuee) => 
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(valuee);

function Subtotal({value}) {
    const [{cart}, dispatch] = useDataLayerValue();
    
    return (
        <div className='subtotal'>
            
            <p>
                Subtotal ({cart.length} items): <strong>{numberFormat(value)}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type="checkbox"/> This order contains a gift
            </small>

            <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
