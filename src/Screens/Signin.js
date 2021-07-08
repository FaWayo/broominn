import React, { useState} from 'react';
import {withRouter} from 'react-router-dom';
import firebase from '../config/fire';



function Signin(props) {
    // const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    async function onLogin(){
        try{
            await firebase.login(email, password)
            props.history.replace('/generator')
        } catch(error){
            alert(error.message)
        }
    }

    
        
     

    return (
        <div className="container-1">
            <h1>
               Log In
            </h1>
          <div>
             <form onSubmit={e => e.preventDefault() && false}>
               

                <label>Email: </label>
                <input className="input-1" type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
                <br/>

                <label>Password: </label>
                <input className="input-1" type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                
                <button type="submit" className="button-1"  onClick={onLogin}>Log In</button>
             </form>

             
            </div>
        </div>
    )
}

export default withRouter(Signin);