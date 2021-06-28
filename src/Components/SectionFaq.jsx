import React from 'react'
import Fade from 'react-reveal/Fade'

class SectionFaq extends React.Component{
    render(){
        return <section className="section">
            <div className="container py-4">
                <h2 className="title is-size-3-mobile has-text-centered mb-6 faq__title">Preguntas Frecuentes</h2>
                <div className="mb-6">
                    <Fade top delay={400}>
                    <div className="card block faq__1">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64"><img
                                                src="https://raw.githubusercontent.com/michael2rain/golcegusto.github.io/main/img/assets/tiempo.png"
                                                alt=""/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h3 className="title is-4">¿Cuanto tiempo tarda en llegar mi pedido?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet, labore
                                            laudantium qui autem ipsum, veniam quaerat a corrupti vero vel nihil voluptatem,
                                            temporibus vitae dolorum accusantium repellendus voluptatum neque?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade top delay={600}>
                    <div className="card block faq__2">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64"><img
                                                src="https://raw.githubusercontent.com/michael2rain/golcegusto.github.io/main/img/assets/pagos.png"
                                                alt=""/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h3 className="title is-4">¿Que métodos de pago estan disponibles?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam deserunt
                                            provident autem, sit, sed et nostrum praesentium, voluptatem facilis optio illum
                                            error modi ducimus perferendis quam maxime aliquid ab repellendus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade top delay={800}>
                        <div className="card block faq__3">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64"><img
                                                src="https://raw.githubusercontent.com/michael2rain/golcegusto.github.io/main/img/assets/cp.png"
                                                alt=""/></figure>
                                    </div>
                                    <div className="media-content">
                                        <h3 className="title is-4">¿LLegan a mi código postal?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, et dolores
                                            tempore iusto numquam sunt necessitatibus placeat alias, at nemo repellat architecto
                                            blanditiis. Magnam animi voluptatem recusandae, dicta sed facilis?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade top delay={800}>
                        <div className="card block faq__4">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64"><img
                                                src="https://raw.githubusercontent.com/michael2rain/golcegusto.github.io/main/img/assets/tiendas.png"
                                                alt=""/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h3 className="title is-4">¿En que tiendas puedo comprar capsulas de recarga?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem unde odio explicabo
                                            eveniet perspiciatis sed debitis repellendus, in quidem enim iste excepturi
                                            reiciendis nam perferendis maxime. Sequi, quia! Quia, similique?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="buttons is-centered"><a className="button is-rounded" href="#comprar">Hacer una pregunta</a></div>
            </div>
        </section>
    }
}

export default SectionFaq