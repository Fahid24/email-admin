import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChx-2_6dRKDSoco1YxeuA2-yNU1G9yXfw",
  authDomain: "email-app2.firebaseapp.com",
  projectId: "email-app2",
  storageBucket: "email-app2.appspot.com",
  messagingSenderId: "1034597140634",
  appId: "1:1034597140634:web:63a3bc56a2e190490f3723",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const storage = getStorage(app);

export default db;
