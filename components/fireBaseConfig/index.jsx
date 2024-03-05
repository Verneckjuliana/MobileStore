import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZ7h7c3_JxgqAfYMA1LLk7wj7EUrcpzTA",
  authDomain: "luminosart-c0e99.firebaseapp.com",
  projectId: "luminosart-c0e99",
  storageBucket: "luminosart-c0e99.appspot.com",
  messagingSenderId: "44684286023",
  appId: "1:44684286023:web:9d5a97e54cd08a628c3962"
};

const app = initializeApp(firebaseConfig);

export default app