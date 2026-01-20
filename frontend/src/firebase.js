import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCoIa_YTfKfpuucAXQTm7iJ3ZJ_VnehNQ",
  authDomain: "gestion-scolaire-c9bcd.firebaseapp.com",
  projectId: "gestion-scolaire-c9bcd",
  storageBucket: "gestion-scolaire-c9bcd.firebasestorage.app",
  messagingSenderId: "125891725495",
  appId: "1:125891725495:web:efc7be3f8422f5d3176532"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);