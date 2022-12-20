import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBTTGvsybj5Jbz25y_VhDnVTQkAxl4eyHY',

  authDomain: 'react-http-f70a2.firebaseapp.com',

  databaseURL: 'https://react-http-f70a2-default-rtdb.firebaseio.com',

  projectId: 'react-http-f70a2',

  storageBucket: 'react-http-f70a2.appspot.com',

  messagingSenderId: '970730855937',

  appId: '1:970730855937:web:eb238c6da8bc0c3a26ea00'
});

export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default app;
