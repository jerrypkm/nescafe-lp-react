import React from 'react'

class Footer extends React.Component{
    render(){
        return <footer className="footer section">
            <div className="footer__container bd-grid">
                <div className="footer__data">
                    <h2 className="footer__title">JHON DOE</h2>
                    <p className="footer__text">I'm Jhon Doe and this is my personal website</p>
                </div>

                <div className="footer__data">
                    <h2 className="footer__title">EXPLORE</h2>
                    <ul>
                        <li><a href="#home" className="footer__link">Home</a></li>
                        <li><a href="#about" className="footer__link">About</a></li>
                        <li><a href="#skills" className="footer__link">Skills</a></li>
                        <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                        <li><a href="#Contact" className="footer__link">Contact</a></li>
                    </ul>
                </div>
                
                <div className="footer__data">
                    <h2 className="footer__title">FOLLOW</h2>
                    <a href="#" className="footer__social"><i className='bx bxl-facebook' ></i></a>
                    <a href="#" className="footer__social"><i className='bx bxl-instagram' ></i></a>
                    <a href="#" className="footer__social"><i className='bx bxl-twitter' ></i></a>
                </div>

            </div>
        </footer>
    }
}

export default Footer