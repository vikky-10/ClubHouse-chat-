import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAlO3ckqcH5cdVbj0QpxchsRMWiZ_-Yhcg",
    authDomain: "clubhouse-22a0c.firebaseapp.com",
    projectId: "clubhouse-22a0c",
    storageBucket: "clubhouse-22a0c.appspot.com",
    messagingSenderId: "458800362352",
    appId: "1:458800362352:web:9c1f118e19f049ba4615b5",
  })
  .auth();
