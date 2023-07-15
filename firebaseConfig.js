import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAeqDLgxVkLzgjrGeLqVIacydvwjuNeMPE",
    authDomain: "one-two-master.firebaseapp.com",
    projectId: "one-two-master",
    storageBucket: "one-two-master.appspot.com",
    messagingSenderId: "1013335023027",
    appId: "1:1013335023027:web:20b62070c6a78314e3ffc6"
  };
  
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};

//   const app = initializeApp(firebaseConfig);