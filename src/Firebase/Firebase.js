import app from "firebase/app";
import "firebase/firestore";
import 'firebase/firebase-auth'

import firebaseConfig from "./Config";



class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.app = app;
    this.db = app.firestore();
    this.auth = app.auth;
    this.ProviderGoogle = new app.auth.GoogleAuthProvider();
    this._LoguearGoogle = this._LoguearGoogle;
    this.LogOut = this._LogOut
  }

  //Funciones
  async _LoguearGoogle() {
    try{
        let res = ''
        let provider = new app.auth.GoogleAuthProvider();
        await app.auth().signInWithPopup(provider).then((result) => {
          res = result
        });
        return res
    
    }catch{
        return 'ErrorLoginGoogle'
    }
  }
  async _LogOut(){
      try{
        let Res = await app.auth().signOut()
        let res2 = await app.auth().LogOut()
      }catch{
          return 'ErrorLogout'
      }
      
  }
}

const firebase = new Firebase();
export default firebase;
