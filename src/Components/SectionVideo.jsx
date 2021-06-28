import React from 'react'
import Fade from 'react-reveal/Fade';

class SectionVideo extends React.Component{
    render(){
        return <React.Fragment>
         <section className="hero is-light is-bold" >
            <div className="hero-body hero__main">
                <div className="container has-text-centered">
                    <div className="content is-small">
                        <Fade top delay={400}>
                        <h3 className="is-size-2 is-size-3-mobile video__title video__title">Todo el sabor del café gourmet en casa</h3>
                        </Fade>
                        <Fade top delay={600}>
                        <p className="subtitle is-size-6-mobile video__text video__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                            sapiente
                            quibusdam commodi maiores, illo dolore minus nesciunt natus?</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <iframe width="100%" height="560px" src="https://www.youtube.com/embed/KbYXowf06nw">
            </iframe>
        </section>
    </React.Fragment>
    }
}

export default SectionVideo
