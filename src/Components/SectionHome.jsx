import React from 'react'
import Perfil from '../images/perfil.png'
import Fade from 'react-reveal/Fade';

class SectionHome extends React.Component{
    render(){
        return <section className="home" id="home">
            <div className="home__container bd-grid">
                <Fade top>
                    <h1 className="home__title"><span>DOLCE</span><br/>GUSTO.</h1>
                </Fade>
                <Fade top delay={200}>
                    <div className="home__scroll">
                        <a href="#about" className="home__scroll-link"><i className='bx bx-up-arrow-alt' ></i>Scroll down</a>
                    </div>
                </Fade>
                <Fade right delay={400}>
                    <img src={Perfil} alt="" className="home__img"/>    
                </Fade>
            </div>
        </section>
    }
}

export default SectionHome