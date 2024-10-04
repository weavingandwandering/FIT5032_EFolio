import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA_x9iYI6dAzYhjWzjjGDISJgX1d9Z5l0",
  authDomain: "week7-ishita.firebaseapp.com",
  projectId: "week7-ishita",
  storageBucket: "week7-ishita.appspot.com",
  messagingSenderId: "642711224507",
  appId: "1:642711224507:web:2193290984c6518652699e"
};

// Initialize Firebase
const database = initializeApp(firebaseConfig);
const db = getFirestore()
export default db