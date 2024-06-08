import React,{useState} from 'react'
import firebase from '../config/fire'
import {withRouter} from 'react-router-dom'
import 'firebase/firestore';
import {v4 as uuidv4} from "uuid";

function LinkGenerator(props) {

    

    // const[username, setUsername] = useState('')
    const[url, setUrl] = useState('')
    const[seller, setSeller] = useState('')
    let uniqueId = uuidv4();

    const referrer = firebase.getCurrentUsername();
    
    const link =`http://salesyrefer/${uniqueId}`;


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
  
        
        await firebase.addUrl(referrer, url, uniqueId, seller, link)

        alert(link);
    };

    async function logout() {
		await firebase.logout()
		props.history.push('/')
	}

    

     
    return (
        
        <div>
            <button onClick={logout}> Logout </button>
        <div className = "container-1">

            {/* <h1>{referrer}, generate referral link</h1> */}
            <form onSubmit={handleFormSubmit} >
          
                <label> SellerUrl: </label>
                <input className="input-1" type="text" value={url} placeholder= "Enter URL of Seller" onChange={e=> setUrl(e.target.value)}/>
                <br/>

                <label>Seller:  </label>
                <input className="input-1" type="text" value={seller} onChange={e=> setSeller(e.target.value)} placeholder="Enter name of the seller"/>
                
                <button  type="submit" className="button-1">Generate Link</button> 
            </form>

            
        </div>
        </div>
    )
    
}

export default withRouter(LinkGenerator)
