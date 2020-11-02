import React from 'react';

import './header.scss';

import Logo from '../assets/images/logooutline.png';

const Header = () => {
    return (
        <header>
            <div className='logo-box'>
                <img className='logo-box__logo' src={Logo} alt='logo-outline' />
            </div>
            <h1 className='text-box'>
                <div className='text-box__header-primary'>
                    <span className='text-box__header-primary--text text-box__header-primary--main'>primary</span>
                    <span className='text-box__header-primary--text text-box__header-primary--sub'>primary sub</span>
                </div>
                <a className='btn btn--white btn--animated' href='#'>show your course</a>
            </h1>
        </header>
    );
}

export default Header;