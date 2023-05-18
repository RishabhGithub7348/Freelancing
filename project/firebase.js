// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCZL2qUqyKQQVXgP1_rOKlevGIhK3cs1_M",
  authDomain: "erp-prpject.firebaseapp.com",
  projectId: "erp-prpject",
  storageBucket: "erp-prpject.appspot.com",
  messagingSenderId: "650532807018",
  appId: "1:650532807018:web:5220555d1146bab2414513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
