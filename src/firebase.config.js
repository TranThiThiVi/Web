


import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore";

import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBs330VJ0d1t0Y_ZexGYjVJT9ZcA9blDZU",
  authDomain: "maltimart-2d2e8.firebaseapp.com",
  projectId: "maltimart-2d2e8",
  storageBucket: "maltimart-2d2e8.appspot.com",
  messagingSenderId: "994463857",
  appId: "1:994463857:web:75eac9deb034dba7238bd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db =getFirestore(app);
export const storage= getStorage(app);
export default app;