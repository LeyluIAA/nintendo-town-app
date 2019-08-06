import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyC54w20X4LNOhTxjyp-sBPpkrHeMxukgk0',
  authDomain: 'nintendo-town-app.firebaseapp.com',
  databaseURL: 'https://nintendo-town-app.firebaseio.com',
  projectId: 'nintendo-town-app',
  storageBucket: '',
  messagingSenderId: '688627979616',
  appId: '1:688627979616:web:883079976441e6a0'
}

firebase.initializeApp(config)
