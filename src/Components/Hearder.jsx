import React from 'react'
import Logo from '../images/logo.png'

class Header extends React.Component{
    render(){
        return <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo">  </a>
                    <a title="hola" href="https://www.facebook.com/wortev/"><img className="logo" src={Logo} alt=""/></a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#storys" className="nav__link">Storys</a></li>
                        <li className="nav__item"><a href="#products" className="nav__link">Products</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    }
}

export default Header