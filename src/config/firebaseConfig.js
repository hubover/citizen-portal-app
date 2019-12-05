import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBLZ9jEcx1OI-zFPImItXlskTjxnW6rb5I",
  authDomain: "pm-citizen-portal-4f018.firebaseapp.com",
  databaseURL: "https://pm-citizen-portal-4f018.firebaseio.com",
  projectId: "pm-citizen-portal-4f018",
  storageBucket: "pm-citizen-portal-4f018.appspot.com",
  messagingSenderId: "712007907005",
  appId: "1:712007907005:web:b01910c35346aeb8"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;