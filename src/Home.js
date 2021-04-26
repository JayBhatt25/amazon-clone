import React from 'react'
import './Home.css'
import Product from './Product'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';



function Home() {
    return (
        <div className="home">
           
            
            
            <a 
                href="https://wa.me/919867780322/?text=I would like to place an order"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            >
       <WhatsAppIcon />
        </a>

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
                    title='Logitech G402 Hyperion Fury Wired Gaming Mouse, 4,000 DPI, Lightweight, 8 Programmable Buttons, Compatible with PC/Mac - Black' 
                    cost={2299} 
                    imgUrl='https://m.media-amazon.com/images/I/61CqLgubwoL._AC_UY218_.jpg' 
                    rating={5} />
                    <Product id="2346543" 
                    title='HyperX Cloud Core + 7.1 Gaming Headset for PC, PS4, Xbox One, Nintendo Switch, and Mobile Devices (HX-HSCC-2-BK/WW)' 
                    cost={6400} imgUrl='https://m.media-amazon.com/images/I/5164Sqd8b-L._AC_UY218_.jpg' 
                    rating={3}/>
                    <Product id="3454362" 
                    title='Cosmic Byte CB-GK-02 Corona Wired Gaming Keyboard, 7 Color RGB Backlit with Effects, Anti-Ghosting (Black)' 
                    cost={1284} 
                    imgUrl='https://m.media-amazon.com/images/I/71ftnIeMlTL._AC_UY218_.jpg' 
                    rating={3} />
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}

                </div>

                <div className='home__row'>
                <Product id ="231243245" 
                title='boAt Airdopes 281 Bluetooth Truly Wireless Earbuds with Mic(Active Black)' 
                cost={1799} 
                imgUrl='https://m.media-amazon.com/images/I/61U4ZnmUl2L._AC_UY218_.jpg'
                 rating={3} />
                    {/* Product */}

                </div>

            </div>
        </div>
    )
}

export default Home
