
import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"

import Search from './Search/Search'
import Cart from '../Cart/Cart'
import Context from '../../utails/context'
import "./Header.scss";
const Header = () => {

    //USESTATE
    //usestate for scrolled navber
    const [scrolled, setScrolled] = useState(false)
    //Show cart usestate
    const [showCart, setShowCart] = useState(false)
    //Show search usestate
    const [showSearch, setShowSearch] = useState(false)


    //handle navber scroll function
    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 150) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])
    // eslint-disable-next-line

    //functions for show cart
    const showCartFunction = () => {
        setShowCart(true);

    }
    //functions for show search
    const showSearchFunction = () => {
        setShowSearch(true);

    }

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li>home</li>
                        <li>about</li>
                        <li>categories</li>
                    </ul>
                    <div className="center">
                        PJSTORE.
                    </div>
                    <div className="right">
                        <TbSearch onClick={showSearchFunction} />
                        <AiOutlineHeart />
                        <span className="card-icon" onClick={showCartFunction}>
                            <CgShoppingCart />
                            <span>5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>

    );
};

export default Header;
