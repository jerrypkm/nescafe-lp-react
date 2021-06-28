import React from 'react'
import Fade from 'react-reveal/Fade'

class SectionStories extends React.Component{
    render(){
        return <React.Fragment>
            <section id="storys" className="hero is-small">
                <div className="hero-body">
                    <div className="content is-medium">
                        <Fade top delay={400}>
                            <h2 className="title is-size-1-desktop is-size-3-mobile is-spaced has-text-centered modal__title">Historias con olor a
                            café</h2>
                        </Fade>
                        <Fade top delay={800}>
                            <p className="subtitle is-4 is-size-5-mobile has-text-centered modal__text">Descubre los sabores del mundo desde casa
                                con tu
                                <strong> Dolce
                                    Gusto Genio</strong>.
                            </p>
                        </Fade>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container py-4">
                    <div className="columns is-multiline">
                        <div className="column is-12 is-4-desktop">
                            <div className="card card__size">
                                <div className="card-image"><a href="#"><img
                                            src="https://raw.githubusercontent.com/michael2rain/golcegusto.github.io/main/img/post/post-0.jpg"
                                            alt=""/></a></div>
                                <div className="card-content">
                                    <span className="is-size-7">9 Nov 2020</span>
                                    <h5 className="title is-5"><a href="#">Disfruto de un café turco como si estuviera en
                                            Stambul.</a></h5>
                                    <button className="button is-rounded" href="#">
                                        <span>Leer más</span>
                                        <span className="icon"><i className="fas fa-arrow-circle-right"></i></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12 is-4-desktop">
                            <div className="card card__size">
                                <div className="card-image"><a href="#"><img
                                            src="https://raw.githubusercontent.com/michael2rain/golcegusto.github.io/main/img/post/post-1.jpg"
                                            alt=""/></a></div>
                                <div className="card-content">
                                    <span className="is-size-7">31 Oct 2020</span>
                                    <h5 className="title is-5"><a href="#">Los secretos de despertar siempre con la mejor
                                            actitud.</a></h5>
                                    <button className="button is-rounded" href="#">
                                        <span>Leer más</span>
                                        <span className="icon"><i className="fas fa-arrow-circle-right"></i></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12 is-4-desktop">
                            <div className="card card__size">
                                <div className="card-image"><a href="#"><img
                                            src="https://raw.githubusercontent.com/michael2rain/golcegusto.github.io/main/img/post/post-2.jpg"
                                            alt=""/></a></div>
                                <div className="card-content">
                                    <span className="is-size-7">14 Octubre 2020</span>
                                    <h5 className="title is-5"><a href="#">Cenar en casa con amigos y un cafe es lo único que puedo
                                            pedir.</a></h5>
                                    <button className="button is-rounded" href="#">
                                        <span>Leer más</span>
                                        <span className="icon"><i className="fas fa-arrow-circle-right"></i></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    }
}

export default SectionStories