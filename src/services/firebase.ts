import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_uVQdnDBtzQvOysrALnX79e97P1_TSNs",
  authDomain: "miamobile-46030.firebaseapp.com",
  projectId: "miamobile-46030",
  storageBucket: "miamobile-46030.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  // appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
