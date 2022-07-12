import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyACh57nhnCK_3D-Env0ltV1_6hIc_DEtzw',
  authDomain: 'react-fb-todo-crud.firebaseapp.com',
  projectId: 'react-fb-todo-crud',
  storageBucket: 'react-fb-todo-crud.appspot.com',
  messagingSenderId: '894133651142',
  appId: '1:894133651142:web:1f06387e536ea3d0f779c7',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
