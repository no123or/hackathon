import {initializeApp} from 'firebase/app';
import { getAuth , GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyCvsCPxYYamZk17rOMoyAURPW340i7lBA0",
  authDomain: "hackathon-9136f.firebaseapp.com",
  projectId: "hackathon-9136f",
  storageBucket: "hackathon-9136f.appspot.com",
  messagingSenderId: "281900971448",
  appId: "1:281900971448:web:8ac41c73239280d273cb4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);