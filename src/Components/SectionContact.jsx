import React from 'react'
import Fade from 'react-reveal/Fade'

class SectionContact extends React.Component{
    render(){
        return <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact__container bd-grid">
                <div className="contact__info">
                    <Fade top>
                        <h3 className="contact__subtitle">EMAIL</h3>
                    </Fade>
                    <Fade top delay={200}>
                        <span className="contact__text">info.mail.com</span>
                    </Fade>
                    <Fade top>
                        <h3 className="contact__subtitle">PHONE</h3>
                    </Fade>
                    <Fade top delay={200}>
                        <span className="contact__text">+20 999-999</span>
                    </Fade>
                    <Fade top>
                        <h3 className="contact__subtitle">ADRESS</h3>
                    </Fade>
                    <Fade top delay={200}>
                        <span className="contact__text">My contry</span>
                    </Fade>
                </div>

                <form action="" className="contact__form">
                    <Fade top delay={400}>
                        <div className="contact__inputs">
                            <input type="text" placeholder="Name" className="contact__input"/>
                            <input type="mail" placeholder="Email" className="contact__input"/>
                        </div>
                        <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
                    </Fade>
                    <Fade top delay={600}>
                        <input type="submit" value="Enviar" className="contact__button"/>
                    </Fade>
                </form>
            </div>
        </section>
    }
}

export default SectionContact