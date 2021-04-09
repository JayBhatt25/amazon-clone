import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div class='home__container'>
                <img 
                className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroApril21/SMP_D_PV_1X._CB655443381_.jpg'>
                </img>

                <div className='home__row'>
                    <Product id="546322" 
                    title='EuroShop Super Comfy Leatherette Bean Bag and Puffy Cover (Set of 2, Without Beans)' 
                    cost={799} 
                    imgUrl='https://m.media-amazon.com/images/I/81twKvoZnzL._AC_UL320_.jpg' 
                    rating={5} />
                    <Product id="1237573"
                    title='Smart Band 5' 
                    cost={2499} 
                    imgUrl='https://m.media-amazon.com/images/I/719ZywAmvOL._AC_UL320_.jpg' rating={4} />
                    {/* Product */}
                    {/* Product */}

                </div>

                <div className='home__row'>
                    <Product id="3242347"
                    title='EuroShop Super Comfy Leatherette Bean Bag and Puffy Cover (Set of 2, Without Beans)' 
                    cost={799} 
                    imgUrl='https://m.media-amazon.com/images/I/81twKvoZnzL._AC_UL320_.jpg' 
                    rating={4} />
                    <Product id="2346543" title='Smart Band 5' cost={2499} imgUrl='https://m.media-amazon.com/images/I/719ZywAmvOL._AC_UL320_.jpg' rating={3}/>
                    <Product id="3454362" title='Smart Band 5' cost={2499} imgUrl='https://m.media-amazon.com/images/I/719ZywAmvOL._AC_UL320_.jpg' rating={2} />
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}

                </div>

                <div className='home__row'>
                <Product id ="231243245" title='EuroShop Super Comfy Leatherette Bean Bag and Puffy Cover (Set of 2, Without Beans)' 
                cost={799} imgUrl='https://m.media-amazon.com/images/I/81twKvoZnzL._AC_UL320_.jpg' rating={3} />
                    {/* Product */}

                </div>

            </div>
        </div>
    )
}

export default Home
