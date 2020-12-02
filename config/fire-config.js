import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCkqTqa1K4ZF-h1wJmxSJz__mT1AW5zmBA',
  authDomain: 'detratores-4768a.firebaseapp.com',
  databaseURL: 'https://detratores-4768a.firebaseio.com',
  projectId: 'detratores-4768a',
  storageBucket: 'detratores-4768a.appspot.com',
  messagingSenderId: '226934872497',
  appId: '1:226934872497:web:8c26c83a64826a96d04590',
  measurementId: 'G-XJZEB2K7D4',
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;
