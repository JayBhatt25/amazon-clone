import React from 'react'
import './Header.css'
import '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import { useDataLayerValue } from './Datalayer';
import { auth } from './firebase';

function Header() {
    const [{cart, user}, dispatch] = useDataLayerValue();
    const history = useHistory();

    const handleAuthentication = () => {
        if(user){
            auth .signOut();

            dispatch({
                type: "RESET_CART",
                

            })

        }
        
    }
    
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
                <Link to={ !user && '/login'}>
                <div onClick={handleAuthentication}  className='header__option'>
                    <span className='header__optionFirstLine'>
                        Hello {user ? `${user.email}` : 'Guest'}
                    </span>
                    <span className='header__optionSecondLine'>
                         {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link>
                
                <div onClick={e => {history.push('/orders')}} className='header__option'>
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
