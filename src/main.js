import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
require('@/assets/css/main.css')


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkJNBfw35dKMWRb5UEnHfXH0GtEOYZcSk",
  authDomain: "vue-firebase-auth-1ff9f.firebaseapp.com",
  projectId: "vue-firebase-auth-1ff9f",
  storageBucket: "vue-firebase-auth-1ff9f.appspot.com",
  messagingSenderId: "233472128582",
  appId: "1:233472128582:web:d7073ce9d87cbf2813fc47"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
