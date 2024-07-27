
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwSeIE3X0J9E0hZfdd22J3stSaJjdPEgE",
  authDomain: "go-shop-food-website-1.firebaseapp.com",
  projectId: "go-shop-food-website-1",
  storageBucket: "go-shop-food-website-1.appspot.com",
  messagingSenderId: "569713365267",
  appId: "1:569713365267:web:7d120d92f5cd92134c8ae6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


