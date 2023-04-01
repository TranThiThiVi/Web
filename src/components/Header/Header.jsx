

import React, { useRef, useEffect } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import './header.css'
import { motion } from "framer-motion"
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import useAuth from '../../custom/useAuth'
import { Link } from 'react-router-dom'
const nav_link = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
    // {
    //     path:'about us',
    //     display: 'About Us'
    // }
]
const Header = () => {


    const headerRef = useRef(null);
    //  hàm tính tổng số lượng đã thêm trong giỏ hàng
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    //
    

    const menuRef = useRef(null);

    const profileActionRef = useRef(null);

    const navigate = useNavigate()


    const { currentUser } = useAuth()
    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header');

            } else {
                headerRef.current.classList.remove('sticky_header');
            }
        });
    };
    useEffect(() => {
        stickyHeaderFunc()
        return () => window.removeEventListener('scroll', stickyHeaderFunc);
    });


    const menuTonggle = () => menuRef
        .current.classList.toggle('active_menu');


    const navigateToCart = () => {
        navigate("/cart");
    };

    const toggleProfileActions = () => profileActionRef
        .current.classList.toggle('show_profileActions');
    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav-wrapper">
                        <div className="logo">
                            <img src={logo} alt='logo' />
                            <div>
                                <h1>Multimart</h1>
                            </div>
                        </div>
                        <div className="navigation" 
                             ref={menuRef} 
                             onClick={menuTonggle}>
                            <ul className="menu">

                                {nav_link.map((item, index) => (
                                    <li className="nav_item" key={index}>
                                        <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="nav_icons">
                            <span className='fav_icon'> <i class="ri-heart-line"></i>
                                <span className='badge'>1</span>
                            </span>
                            <span className='cart_icon' onClick={navigateToCart} >
                                <i class="ri-shopping-bag-line"></i>
                                <span className='badge'>{totalQuantity}</span>
                            </span>
                            <div className='profile'>
                                <motion.img
                                    whileTap={{ scale: 1.2 }}
                                    src={currentUser ? currentUser.photoURL : userIcon}
                                    alt=""
                                    // onClick={toggleProfileActions}
                                    onClick={() =>toggleProfileActions(profileActionRef)}
                                />
                                <div
                                    className="profile_actions"
                                    ref={profileActionRef}
                                    onClick={() =>toggleProfileActions(profileActionRef)}
                                    // onClick={toggleProfileActions}
                                >
                                    {currentUser ? (
                                    <span>Logout</span>
                                    ) : (
                                        <div>
                                            <Link to='/signup'>SignUp</Link>
                                            <Link to='/login'>Login</Link>
                                        </div>

                                        )}
                                </div>
                            </div>
                            <div className="mobile_menu">
                                <span onClick={menuTonggle}>
                                    <i class="ri-menu-line"></i>
                                </span>
                            </div>

                        </div>

                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;