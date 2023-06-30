import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJR4AeQxxapxJ0S6o68JAi4aWpqqyAXog",
  authDomain: "capstone-6481f.firebaseapp.com",
  projectId: "capstone-6481f",
  storageBucket: "capstone-6481f.appspot.com",
  messagingSenderId: "343030421420",
  appId: "1:343030421420:web:6ef43e149e8b7042b74c09"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
