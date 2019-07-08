import firebase from "firebase"
import firestore from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB0GjdGIR5hnRF2aSliAOCKjmegsIyFy6I",
  authDomain: "ninja-smoothies-123.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-123.firebaseio.com",
  projectId: "ninja-smoothies-123",
  storageBucket: "ninja-smoothies-123.appspot.com",
  messagingSenderId: "42975990470",
  appId: "1:42975990470:web:404fb36fe392d7da"
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp.firestore()
