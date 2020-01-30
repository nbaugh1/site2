import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Nick Baughman</h1>
        <p>Software Developer. I like to work with React.js and Ruby on Rails, but I like to learn new things more.<br /></p>
    </header>
)

export default Header
