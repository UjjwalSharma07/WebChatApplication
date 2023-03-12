import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABn0RxQfLBiuWmWD2lkyvq2oc9zSw7qZo",
  authDomain: "chat-b2902.firebaseapp.com",
  projectId: "chat-b2902",
  storageBucket: "chat-b2902.appspot.com",
  messagingSenderId: "519902512603",
  appId: "1:519902512603:web:12547c3fc40fd4983c13fe",
  measurementId: "G-QF91QH4RG4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const analytics = getAnalytics(app);
export const db = getFirestore();