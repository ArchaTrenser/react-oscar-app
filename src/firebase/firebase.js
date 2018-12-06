import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBaUg7aXuMWX0hALBPU5zRRWAJwZuUXwAk",
  authDomain: "oscar-app-af339.firebaseapp.com",
  databaseURL: "https://oscar-app-af339.firebaseio.com",
  projectId: "oscar-app-af339",
  storageBucket: "oscar-app-af339.appspot.com",
  messagingSenderId: "817000482960"
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider, database as default };
