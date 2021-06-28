import React from 'react'
import Fade from 'react-reveal/Fade'
import Product1 from '../images/work1.jpg'
import Product2 from '../images/work2.jpg'
import Product3 from '../images/work3.jpg'
import Product4 from '../images/work4.jpg'
import Product5 from '../images/work5.jpg'
import Product6 from '../images/work6.jpg'


class SectionProducts extends React.Component{
    render(){
        return <section className="portfolio section" id="products">
            <h2 className="section-title">Products</h2>
            <div className="portfolio__container bd-grid">
                <Fade top delay={200}>
                    <div className="portfolio__img">
                        <img src={Product1} alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                </Fade>
                <Fade top delay={400}>
                    <div className="portfolio__img">
                        <img src={Product2} alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                </Fade>
                <Fade top delay={600}>
                    <div className="portfolio__img">
                        <img src={Product3} alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                </Fade>
                <Fade top delay={200}>
                    <div className="portfolio__img">
                        <img src={Product4} alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                </Fade>
                <Fade top delay={400}>
                    <div className="portfolio__img">
                        <img src={Product5} alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                </Fade>
                <Fade top delay={600}>
                    <div className="portfolio__img">
                        <img src={Product6} alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    }
}

export default SectionProducts