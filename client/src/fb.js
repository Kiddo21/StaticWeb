import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC9XNQPgizrauVcY1eTXcZ0lxX84Ko8Nhk',
  authDomain: 'project-manager-10.firebaseapp.com',
  databaseURL: 'https://project-manager-10.firebaseio.com',
  projectId: 'project-manager-10',
  storageBucket: 'project-manager-10.appspot.com',
  messagingSenderId: '836965988391',
  appId: '1:836965988391:web:e524ae15db06931daa7602',
  measurementId: 'G-4JCJ6REHPB'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
var db = firebase.firestore()

db.settings({})
export default db
