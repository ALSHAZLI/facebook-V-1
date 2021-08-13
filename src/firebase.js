import firebase, { firestore } from 'firebase';
import 'firebase/firestore';
import '@firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDtqOy_CMPyG2UI8FcibEKt7En1ucZJiKY",
  authDomain: "apolgasim-f3393.firebaseapp.com",
  projectId: "apolgasim-f3393",
  storageBucket: "apolgasim-f3393.appspot.com",
  messagingSenderId: "1193638412",
  appId: "1:1193638412:web:cf0b1253f4178ff8850c29",
  databaseURL: 'https://apolgasim-f3393-default-rtdb.firebaseio.com',
};
/* const firebaseConfig = {
  apiKey: "AIzaSyCYVVCm_UEjTuCNzZOhg_y8O-je9TXBuDA",
  authDomain: "velo-9b029.firebaseapp.com",
  projectId: "velo-9b029",
  storageBucket: "velo-9b029.appspot.com",
  messagingSenderId: "937121071533",
  appId: "1:937121071533:web:cdd74930a46a533a67a124",
  databaseURL: 'https://velo-9b029-default-rtdb.firebaseio.com',
};  */
const firebaseApp2 = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider };
export default db;