import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCPKV73IA0Q2akWi9_NHkxkljO5MEF-VUI",
    authDomain: "khush-app.firebaseapp.com",
    databaseURL: "https://khush-app-default-rtdb.firebaseio.com",
    projectId: "khush-app",
    storageBucket: "khush-app.appspot.com",
    messagingSenderId: "53903037192",
    appId: "1:53903037192:web:beb48739112eaa32f492bd",
    measurementId: "G-06D3XYKPMW",
    databaseURL: "https://console.firebase.google.com/project/khush-app/database/khush-app-default-rtdb/data/~2F",
  };

  export const app = initializeApp(firebaseConfig);