import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBH-dYnfN_6Jfg0HljalCf0eQSMY58zH4g",
  authDomain: "ecommerce-1up.firebaseapp.com",
  projectId: "ecommerce-1up",
  storageBucket: "ecommerce-1up.appspot.com",
  messagingSenderId: "262360853072",
  appId: "1:262360853072:web:34416d3945355ba6ba3f55"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}