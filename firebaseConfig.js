// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDE7GnvklMyp9fIpBFd-0JzTswP4iT0puc",
  authDomain: "fishing-6.firebaseapp.com",
  projectId: "fishing-6",
  storageBucket: "fishing-6.firebasestorage.app",
  messagingSenderId: "1082366812448",
  appId: "1:1082366812448:web:5b0bcbce397afca968f745",
  measurementId: "G-L5QLPBX01R"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);