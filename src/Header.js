import React from 'react'
import './Header.css'
import '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <img className='heder__logo'
                 src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />

            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionFirstLine'>
                        Hello Guest
                    </span>
                    <span className='header__optionSecondLine'>
                        Sign In
                    </span>

                </div>

                <div className='header__option'>
                    <span className='header__optionFirstLine'>
                        Returns
                    </span>
                    <span className='header__optionSecondLine'>
                        & Orders
                    </span>
                    
                </div>

                <div className='header__option'>
                    <span className='header__optionFirstLine'>
                        Your
                    </span>
                    <span className='header__optionSecondLine'>
                        Prime
                    </span>

                </div>

                <div className='header__optionCart'>
                    <ShoppingCartIcon />
                    <span className='header__optionSecondLine header__cartCount'>0</span>


                </div>

            </div>
        </div>
    )
}

export default Header
