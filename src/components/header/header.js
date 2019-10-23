import React from "react";
import './header.css'
import { FaCaretDown, FaRegUser, FaShoppingBasket, FaSearch } from 'react-icons/fa';

function Header(){
    return (
        <div>
            <div className="header-nav">
                <div className="header-lang">
                    <div>
                    <span>EN</span>
                    <FaCaretDown className="icon-img"/>
                    </div>
                    <div>
                    <span className="icon-img">USD</span>
                    <FaCaretDown className="icon-img"/>
                    </div>
                </div>
                <div className="header-profile">
                    <div>
                        <FaRegUser className=""/>
                        <span className="icon-img--1">My profile</span>
                    </div>
                    <div>
                        <FaShoppingBasket/>
                        <span className="icon-img--1">0 items</span>
                        <span className="icon-items">$0.00</span>
                    </div>
                    <div>
                    <FaSearch/>
                    </div>  
                </div>
            </div>
            <div className="header-content">
                <h1 className="header-title">BOUNCER</h1>
                <div className="header-content-items">
                    <p>HOME</p>
                    <p>STORE</p>
                    <p>IPHONE</p>
                    <p>IPAD</p>
                    <p>MACBOOK</p>
                    <p>ACCESORIES</p>
                </div>
            </div>
        </div>
    )

}

export default Header;