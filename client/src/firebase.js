import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-78497.firebaseapp.com",
  projectId: "mern-estate-78497",
  storageBucket: "mern-estate-78497.appspot.com",
  messagingSenderId: "135021262688",
  appId: "1:135021262688:web:18acf61363420dc9291005",
};

export const app = initializeApp(firebaseConfig);
