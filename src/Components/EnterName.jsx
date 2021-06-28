import React from 'react'

class EnterName extends React.Component{
    render() {
        return <div className="name__container">
            <label className="name__label1">Hola </label>
            <input 
                type="text" 
                placeholder="tu nombre"
                onChange={this.props.onChange}
                value={this.props.name} 
                className="name__input" 
                name="fname">
            </input>
            <label className="name__label2">, queremos mostrarte algo extraordinario</label>
        </div>
    }
}

export default EnterName