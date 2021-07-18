import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import firebase from '../config/fire'


const fetchUrl = (code) => {
    let query = firebase.getUrl(code)
    return query.get()
        .then(querySnapshot => {
            if (querySnapshot.empty) {
                console.log("No documents found.");
                return
            }
            return querySnapshot.docs[0]._delegate._document.data.value.mapValue.fields.seller_url.stringValue;
        })
        .catch((error) => {
            console.log(error)
        });
}


function GoLink() {
    const { code } = useParams();

    useEffect(() => {
        fetchUrl(code).then(redirectUrl => window.location.replace("https://" + redirectUrl))
    }, []);

    return (
        <div>redirect page</div>
    )
}

export default GoLink;
