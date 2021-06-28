import React from 'react'
import Feature from '../images/producto-feature.jpg'
import Fade from 'react-reveal/Fade';

class SectionAbout extends React.Component{
    state={
        nActive: this.props.nActive,
        name: this.props.name,
    }
    render(){
        return <section className="about section" id="about">
            <h2 className="section-title">Lo nuevo</h2>

            <div className="about__container bd-grid">
                <div className="">
                    <img src={Feature} alt=""/>
                </div>
                <div>
                    <Fade top delay={300}>
                        <h2 className="about__subtitle">Hola {this.props.name+","} soy Piccolo Titanio</h2>
                    </Fade>
                    <Fade top delay={400}>
                        <span className="about__profession">Tu barista inteligente</span>
                    </Fade>
                    <Fade top delay={500}>
                        <p className="about__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci consectetur, architecto quas fugiat, iste inventore facere repellendus delectus id, vitae blanditiis.</p>
                    </Fade>
                    <Fade top delay={500}>
                        <button className="button buy__button">Comprar</button>
                    </Fade>
                </div>
            </div>
        </section>
    }
}

export default SectionAbout