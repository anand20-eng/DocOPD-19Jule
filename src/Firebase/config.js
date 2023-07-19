import { initializeApp } from 'firebase/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBvPw2r6Kc-gf8JRWm6z-qh4TnzLWDbTWI",
  authDomain: "delivery-admin-efb21.firebaseapp.com",
  projectId: "delivery-admin-efb21",
  storageBucket: "delivery-admin-efb21.appspot.com",
  messagingSenderId: "680751446013",
  appId: "1:680751446013:web:7aebcce916819cf1aecb94",
  measurementId: "G-47J3MWP2EC"
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig)