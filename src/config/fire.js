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
    appId: "1:963990708983:web:d91c056480b73c483469f2",
    measurementId: "G-0T1TBR90YG"
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
                username
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


         async addUrl(url, uniqueId) {
            // functions.auth.user().onC
            try {
                 const docRef = await this.db.collection("urls").add({
                    //  uid: uid,
                     url: url,
                     code: uniqueId,
                 });
                 console.log("Document written with ID: ", docRef.id);
             } catch (error) {
                 console.error('error adding document: ', error);
             }

           
        
          }

        connectCode(code) {
          
              return this.db.collection("urls").where("code", "==", code)
           
        } ;

        

        
        //   createUser = functions.auth.user().onCreate((user) => {
        //     const userMap = {
        //       uid: user.uid,
        //       email: user.email,
        //     };
        //     return admin.firestore().collection('users').doc(user.uid).set(userMap);
        //   });

        

        
  
          
          
    
        

       
       


  }
  export default new Firebase();