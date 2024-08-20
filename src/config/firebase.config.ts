// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDsjlpE2kxB3xhNhYOLTQ7qgB7HskokkBg',
  authDomain: 'club-ecommerce-2-5a7b3.firebaseapp.com',
  projectId: 'club-ecommerce-2-5a7b3',
  storageBucket: 'club-ecommerce-2-5a7b3.appspot.com',
  messagingSenderId: '317956906636',
  appId: '1:317956906636:web:c02f052ced451d5f41a5a9'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
