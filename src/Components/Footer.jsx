import React from 'react'

class Footer extends React.Component{
    render(){
        return <footer className="footer section">
            <div className="footer__container bd-grid">
                <div className="footer__data">
                    <p className="footer__text">Prueba tecnica hecha con amor para Wortev</p>
                    <b className="footer__text">Gerardo Chapa</b>
                </div>

                <div className="footer__data">
                    <h2 className="footer__title">EXPLORA</h2>
                    <ul>
                        <li><a href="#home" className="footer__link">Home</a></li>
                        <li><a href="#about" className="footer__link">Lo nuevo</a></li>
                        <li><a href="#stories" className="footer__link">Historias</a></li>
                        <li><a href="#products" className="footer__link">Productos</a></li>
                        <li><a href="#contact" className="footer__link">Contacto</a></li>
                    </ul>
                </div>
                
                <div className="footer__data">
                    <h2 className="footer__title">SIGUENOS</h2>
                    <a href="https://www.facebook.com/Nescafe.MX" className="footer__social"><i className='bx bxl-facebook' ></i></a>
                    <a href="https://www.instagram.com/nescafemex/?hl=es-la" className="footer__social"><i className='bx bxl-instagram' ></i></a>
                    <a href="https://twitter.com/nescafemx?lang=es" className="footer__social"><i className='bx bxl-twitter' ></i></a>
                </div>

            </div>
        </footer>
    }
}

export default Footer