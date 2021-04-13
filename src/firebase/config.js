import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCK5xQTQc66BoVO6Sal25XxLYznV2EkDeM",
  authDomain: "vue-project-7d4cf.firebaseapp.com",
  projectId: "vue-project-7d4cf",
  storageBucket: "vue-project-7d4cf.appspot.com",
  messagingSenderId: "258970168422",
  appId: "1:258970168422:web:4afe495c4effeed10791a7"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }