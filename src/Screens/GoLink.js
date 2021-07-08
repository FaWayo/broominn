import React, { useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import firebase from '../config/fire'
import 'firebase/firestore';

function DestinationLink() {
    const {code} = useParams();
    const history = useHistory( )
    const [url,setUrl] = useState("");

    const 

    useEffect(() => {
      let query =  firebase.connectCode(code);
       query.onSnapshot((data)=> {
           if (data.empty){
               return history.push('/');
           }
           let finalData = data.docs[0].data();
           
           setUrl(finalData.url);
       });
    }, []);

    return (
        <div>
            {url}
        </div>
    )
}

export default DestinationLink
