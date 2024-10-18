import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
