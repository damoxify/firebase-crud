import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD7c-KEV6dQ7lc1wCHUUuFm-F2nM88iYfM",
  authDomain: "firecrud-e306c.firebaseapp.com",
  projectId: "firecrud-e306c",
  storageBucket: "firecrud-e306c.appspot.com",
  messagingSenderId: "809380218831",
  appId: "1:809380218831:web:1d1eea121b4ee810c634ba",
  measurementId: "G-52TTBYFEDT"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);