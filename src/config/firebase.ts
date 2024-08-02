import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBGFmXCKf_PthbmWajgmX5RgKoqwJiCQnQ",
  authDomain: "shopping-cart-9b0f2.firebaseapp.com",
  projectId: "shopping-cart-9b0f2",
  storageBucket: "shopping-cart-9b0f2.appspot.com",
  messagingSenderId: "301306043224",
  appId: "1:301306043224:web:ce619d3ad0074a4352632d",
  measurementId: "G-96VTC45GNN"
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();