import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDcxCDtEyaUQSkHlCcThz--J_0wZDvno68",
    authDomain: "chatbox-e80c7.firebaseapp.com",
    databaseURL: "https://chatbox-e80c7.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())
export{firebaseApp}
export default base