import React, { useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import firebase from '../config/fire'
// import 'firebase/firestore';

function GoLink() {
    
    const [url,setUrl] = useState("");
    const {code} = useParams();
    const history = useHistory();

   

  
   useEffect(() => {
       const fetchUrl = e => {
        //    e.preventDefault()
           let query = firebase.getUrl(code)

        query.get()
        .then(querySnapshot => {
            if(querySnapshot.empty){
                console.log("No documents found.");
            }else{

             const finalData = querySnapshot.docs[0]._delegate._document.data.value.mapValue.fields.seller_url.stringValue;
                // const finalData = querySnapshot.docs[0]
             setUrl(finalData);
            console.log(finalData)
            }

         })
             .catch((error) => {
                 console.log(error)
             });
        

       

       }
     fetchUrl();
           
            // window.location.replace(url);
        
  }, []);

  function redirectManually(e){
    e.preventDefault();
   window.location.replace(url);
 }

  
  
      
    
    

    return <div>
        <button className = "inv-button" onClick={redirectManually}>not automatically redirected? click here</button>
         </div>;
    
}

export default GoLink;
