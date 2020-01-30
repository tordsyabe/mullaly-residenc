import * as firebase from "firebase/app";

import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAfbuuq24-0sHdlZRws1a7muzuk6x5VsU0",
  authDomain: "mullaly-residence.firebaseapp.com",
  databaseURL: "https://mullaly-residence.firebaseio.com",
  projectId: "mullaly-residence",
  storageBucket: "mullaly-residence.appspot.com",
  messagingSenderId: "337004559951",
  appId: "1:337004559951:web:ed52ee662ade9d156d343a",
  measurementId: "G-XRQ99GTZV6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
