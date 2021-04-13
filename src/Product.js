import React from 'react'
import './Product.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDataLayerValue } from './Datalayer';

function Product({id,title, cost, imgUrl, rating}) {
    const [{cart}, dispatch] = useDataLayerValue();

  
    const addToCart = () =>{
        dispatch({
            type:"ADD_TO_CART",
            item: {
                id: id,
                title: title,
                cost: cost,
                imgUrl: imgUrl,
                rating: rating,

            },
        });

    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>

                <div className='product__price'>
                    <small>₹</small>
                    <strong>{cost}</strong>

                </div>

                <div className='product__rating'>
                    {Array(rating).fill().map((_,i) =>(<p>⭐</p>))}
                    
                    

                </div>
            </div>

            

           <img className='product__image' 
                src={imgUrl} alt='product'>
            </img>

            <button onClick={addToCart}>
                <AddShoppingCartIcon />
                <p>Add to Cart</p>
            </button>
        </div>
    )
}

export default Product
