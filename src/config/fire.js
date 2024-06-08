import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVYS_9wPVPHgNlBQWYIrx2DPgzKuEDtmQ",
    authDomain: "broomin-af51e.firebaseapp.com",
    databaseURL: "https://broomin-af51e-default-rtdb.firebaseio.com",
    projectId: "broomin-af51e",
    storageBucket: "broomin-af51e.appspot.com",
    messagingSenderId: "963990708983",
    appId: "1:963990708983:web:8ff6d52f584c3cf43469f2",
    measurementId: "G-43TNT1NNRP"
  };

  
   

  class Firebase {
      constructor(){
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
        this.db = firebase.firestore()

        
      }

      
      


      login(email, password){
          return this.auth.signInWithEmailAndPassword(email, password)
      }

      logout(){
          return this.auth.signOut()
      }

      async register(username, email, password){
          await this.auth.createUserWithEmailAndPassword(email, password)
          
          return this.auth.currentUser.updateProfile({
              displayName: username
          })

        }

        addUser(username){
            if(!this.auth.currentUser){
                return alert('Not authorized')
            }
            return this.db.doc(`users/${this.auth.currentUser.uid}`).set({
                username: username
            })
        };

        isInitialized(){
            return new Promise(resolve => {
                this.auth.onAuthStateChanged(resolve)
            })
        }

        getCurrentUsername(){
            return this.auth.currentUser && this.auth.currentUser.displayName



        }

       

        

         async addUrl(referrer, url, uniqueId, seller, link) {
             
            console.log(referrer, url, uniqueId, seller, link, 'stuff to')
            try {
                 const docRef = await this.db.collection("urls").add({
                     referral_code: uniqueId,
                     custom_url: link,
                     seller: seller,
                     seller_url: url,
                     referrer: referrer,
                 });
                 console.log("Document written with ID: ", docRef.id);
             } catch (error) {
                 console.error('error adding document: ', error);
             }

           
        
          }

          

          

          getUrl(code){
        return this.db.collection("urls").where("referral_code", "==", code )
            
          


            
          }


          
        //   querySnapshot((doc) => {
        //     const finalData = doc.data();
        //     console.log(finalData);
        //     return finalData.url;
        // });

         

      

        

        
        //   createUser = functions.auth.user().onCreate((user) => {
        //     const userMap = {
        //       uid: user.uid,
        //       email: user.email,
        //     };
        //     return admin.firestore().collection('users').doc(user.uid).set(userMap);
        //   });

        

        
  
          
          
    
        

       
       


  }
  export default new Firebase();