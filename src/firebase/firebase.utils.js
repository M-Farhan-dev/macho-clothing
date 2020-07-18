
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
  apiKey: "AIzaSyC33zmO8rd0ZlekAAo7-h09KBPQ2GsNsec",
  authDomain: "macho-db.firebaseapp.com",
  databaseURL: "https://macho-db.firebaseio.com",
  projectId: "macho-db",
  storageBucket: "macho-db.appspot.com",
  messagingSenderId: "476954077632",
  appId: "1:476954077632:web:7f253ede02f34669308025",
  measurementId: "G-Z3STPWF4XM"

  };
export const createUserProfileDocument =async (userAuth,additionalData)=> {
    if (!userAuth)
    return;
    
    const userRef=firestore.doc( `users/${userAuth.uid}`);
    const snapshot =await userRef.get()
    if(!snapshot.exists){
      const {displayName,email}=userAuth;
      const createdAt =new Date();
      try{
      await userRef.set({
       displayName,
  email,
  createdAt,
  ...additionalData
})
      }
      catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
};


  firebase.initializeApp(config);

  export const auth=firebase.auth(); //export auth and firestore here
  export const firestore=firebase.firestore();
const provider =new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({prompt:'select_account'});  //always trigger google popup 
export const SignInWithGoogle=()=>auth.signInWithPopup(provider); //google popup only requried

export default firebase;