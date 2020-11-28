import React from 'react'
import '../App.css';

class Message extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                message: props.message,
                pseudo :props.pseudo,
                isUser : props.isUser
            }
        
        
    }

    render(){
        if(this.state.isUser(this.state.pseudo)){
            return (
                <p className='user-message'>
                  {this.state.message}
                </p>
              )
        }else{

            return (
                <p className='not-user-message'>
                  <strong>{this.state.pseudo}: </strong>{this.state.message}
                </p>
              )
        }
       
    }
}

export default Message