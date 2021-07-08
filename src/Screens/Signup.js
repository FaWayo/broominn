import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from "../config/fire";



function Signup(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [id, setId] = useState('')


    async function onRegister(){

        try{
           await firebase.register(username, email, password);
           await firebase.addUser(username)
            props.history.replace('/generator')

        } catch(error){
            alert(error.message)
        }
    }

    
        
   

    return (
        <div className="container-1">
            <h1>
                Register
            </h1>
          <div>
             <form onSubmit={e => e.preventDefault() && false } >
                <label>Username: </label>
                <input className="input-1" type="text" value={username} onChange={e=> setUsername(e.target.value)}/>
                <br/>

                <label>Email: </label>
                <input className="input-1" type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
                <br/>

                <label>Password: </label>
                <input className="input-1" type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                
                <button type="submit" className="button-1"  onClick={onRegister}>Register</button> 

             </form>

             

             <p>Already have an account? <Link to = '/login'>Log in</Link></p>
            </div>
        </div>
    )
}

export default withRouter(Signup);
