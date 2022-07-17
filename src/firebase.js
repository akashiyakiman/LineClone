import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDH8KJ82PBio-5hFi-TJNJzkgDGwIG6CX4',
  authDomain: 'line-clone-89fa9.firebaseapp.com',
  projectId: 'line-clone-89fa9',
  storageBucket: 'line-clone-89fa9.appspot.com',
  messagingSenderId: '855786224076',
  appId: '1:855786224076:web:c6e356c4b5d86b516b4569',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
