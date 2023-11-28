import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBInhUSfyZaddkMWRsNsVzI3iLWopGihUU",
  authDomain: "balneario-kai.firebaseapp.com",
  projectId: "balneario-kai",
  storageBucket: "balneario-kai.appspot.com",
  messagingSenderId: "736477250851",
  appId: "1:736477250851:web:728bfce1365a7cbf1eb896",
  measurementId: "G-JTR39PELE1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
