// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCEwgkFi5DrPGEx2J5gtYd_womTsrEvr4s',
  authDomain: 'blog-reactjs-b2a5e.firebaseapp.com',
  projectId: 'blog-reactjs-b2a5e',
  storageBucket: 'blog-reactjs-b2a5e.appspot.com',
  messagingSenderId: '994029271054',
  appId: '1:994029271054:web:833d8b769375538a8ca45f',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
