import React,{Component, createRef} from 'react'
import './App.css';


import Formulaire from './Components/Formulaire';
import Message from './Components/Message';
import base from './base'
import './animations.css'

//ANIMATION
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends  Component{

  constructor(props){
    super(props)
    this.state= {
      messages : {},
      pseudo : this.props.match.params.pseudo
    }
    this.addMessage = this.addMessage.bind(this)
    // console.log(` voila le pseudo ${this.state.pseudo}`)
  }

  messagesRef = createRef()

  componentDidMount(){
    base.syncState('/', {
      context:this,
      state: 'messages'
    })

    console.log(`je suis dans le componentDidMount et la valeur du sate est ${this.state.messages}`)
  }

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }
 
  addMessage = (message) =>{
    const messages = {...this.state.messages}
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }
  
  isUser = pseudo => pseudo === this.state.pseudo


  render(){

    const messages = Object
    .keys(this.state.messages)
    .map(key =>(
      <CSSTransition
        timeout={200}
        classNames='fade'
        key = {key}>
        <Message 
          isUser={this.isUser}
          pseudo = {this.state.messages[key].pseudo}
          message = {this.state.messages[key].message}/>
     </CSSTransition>
     
    ))
    
    
    return(
      <div className = 'box'  >
        <div>
          <div className = 'messages' ref={this.messagesRef}  >
            <TransitionGroup className='message'>
                { messages }
              </TransitionGroup>
          </div>
        </div>
        <Formulaire 
            pseudo = {this.state.pseudo}
            addMessage = {this.addMessage}
          />
      </div>
    
    )
  }

}

export default App;
