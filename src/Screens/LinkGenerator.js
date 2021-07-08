import React,{useState} from 'react'
import firebase from '../config/fire'
import {withRouter} from 'react-router-dom'
import 'firebase/firestore';
import {v4 as uuidv4} from "uuid";

function LinkGenerator(props) {

    

    // const[username, setUsername] = useState('')
    const[url, setUrl] = useState('')
    const[productName, setProductName] = useState('')

    
   


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let uniqueId = uuidv4();
        // let uid = firebase.getCurrentUsername.uid
        
        await firebase.addUrl(url, uniqueId)

        alert("This is your URL - http://broomin.com/referral?id=" + uniqueId);
    };

    async function logout() {
		await firebase.logout()
		props.history.push('/')
	}

    

     
    return (
        
        <div>
            <button onClick={logout}> Logout </button>
        <div className = "container-1">

            <h1>Hello {firebase.getCurrentUsername()}, Generate your Link</h1>
            <form onSubmit={handleFormSubmit} >
          
                <label>destination link: </label>
                <input className="input-1" type="text" value={url} onChange={e=> setUrl(e.target.value)}/>
                <br/>

                <label>product name:  </label>
                <input className="input-1" type="text" value={productName} onChange={e=> setProductName(e.target.value)}/>
                
                <button  type="submit" className="button-1">Generate Link</button> 
            </form>

            
        </div>
        </div>
    )
    
}

export default withRouter(LinkGenerator)
