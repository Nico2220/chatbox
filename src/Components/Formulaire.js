import React from 'react'
import '../App.css';

class Formulaire extends React.Component{

    constructor(){
        super()
        this.state = {
            message : ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    createMessage = () => {
        const {addMessage,pseudo } = this.props

        const message = {
            pseudo,
            message : this.state.message
        }
        addMessage(message)
        // console.log(`je vous presente un objet passe en parametre ${message}`)

        // RESET
        this.setState({
            message: ''
        })
    }
    

    handleSubmit = event =>{
        event.preventDefault()
        this.createMessage()

        console.log('je soumet le formulaire')
    }

    handleChange = (event)=>{
        this.setState({
            message: event.target.value 
        })
    }

    

    render(){

        return(
        
            <form className = 'form'  onSubmit = {this.handleSubmit}>
                <textarea required 
                    value = {this.state.message}
                    className = 'textMessage ' 
                    onChange = {this.handleChange}
                    >   
                </textarea>
                <br></br>

                <button type = 'submit' >Envoyer</button>
            </form>


        
            
        )
    }
}

export default Formulaire