import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_AUTH_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_ID,
};

export const googleFirebase = initializeApp(firebaseConfig);
export const githubAuth = initializeApp(firebaseConfig);
export const facebookAuth = initializeApp(firebaseConfig);
export const microsoftAuth = initializeApp(firebaseConfig);