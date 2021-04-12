import React from 'react'
import './Header.css'
import '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useDataLayerValue } from './Datalayer';

function Header() {
    const [{cart}, dispatch] = useDataLayerValue();
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo'
                 src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            
            </Link>
            
            
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />

            </div>

            <div className='header__nav'>
                
                <Link to='/login'>
                <div className='header__option'>
                    <span className='header__optionFirstLine'>
                        Hello Guest
                    </span>
                    <span className='header__optionSecondLine'>
                        Sign In
                    </span>
                </div>
                </Link>
                
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

                <Link to='/checkout'>
                    <div className='header__optionCart'>
                    <ShoppingCartIcon />
                    <span className='header__optionSecondLine header__cartCount'>{cart?.length}</span>
                    </div>
                </Link>

                

            </div>
        </div>
    )
}

export default Header
