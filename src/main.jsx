import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpGEuFIPEJZcI7a2X3VdkkArDAovz17rY",
  authDomain: "ecomreactcoderhouse.firebaseapp.com",
  projectId: "ecomreactcoderhouse",
  storageBucket: "ecomreactcoderhouse.appspot.com",
  messagingSenderId: "488509442843",
  appId: "1:488509442843:web:ddec5bea21813b9ebea1be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ChakraProvider>

)
