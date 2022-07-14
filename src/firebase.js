import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'todo-app-crud-a01af.firebaseapp.com',
  projectId: 'todo-app-crud-a01af',
  storageBucket: 'todo-app-crud-a01af.appspot.com',
  messagingSenderId: '994149973271',
  appId: '1:994149973271:web:2ec5872b0cd06384914b52',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
