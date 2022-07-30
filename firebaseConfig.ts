// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQ531udDj8Nof5z4Bq2b8CT8SA3YeoAss',
  authDomain: 'charity-adb82.firebaseapp.com',
  projectId: 'charity-adb82',
  storageBucket: 'charity-adb82.appspot.com',
  messagingSenderId: '334582183194',
  appId: '1:334582183194:web:d5d8225c5b73fbaefb28a3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
