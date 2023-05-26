import { firebase } from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCcfKv0jGYmo-oEuXE4UgWpvqb14iCbfrc',
  authDomain: 'vue-blog-eed0b.firebaseapp.com',
  projectId: 'vue-blog-eed0b',
  storageBucket: 'vue-blog-eed0b.appspot.com',
  messagingSenderId: '249306392233',
  appId: '1:249306392233:web:8536e840591357e9b42bb8'
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }
