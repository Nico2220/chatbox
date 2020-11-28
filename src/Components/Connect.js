import React from 'react'
import { Redirect } from 'react-router-dom'

class Connect extends React.Component{

    constructor(){
        super()
        this.state = {
            pseudo: '',
            goTOchat: false
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            pseudo: event.target.value
        })

    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({
            goTOchat: true
        })

    }

    render(){

        if(this.state.goTOchat){
            return (
                <Redirect push to = {`/pseudo/${this.state.pseudo}`} />
            )
        }

        return(
            <div className = 'connexionBox '>
                <form className = 'connexion' onSubmit = {this.handleSubmit}>
                    <input 
                        value = {this.state.pseudo}
                        type = 'text' 
                        placeholder = 'Pseudo' 
                        className = 'textmessage' 
                        required 
                        onChange = {this.handleChange}
                    >
                    </input><br/>
                    <button 
                        type = 'submit' 
                        
                        >
                        GO
                    </button>
                </form>
            </div>
        )
    }
}

export default Connect