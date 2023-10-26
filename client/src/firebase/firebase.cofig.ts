import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfdLvHQEG44fTfWrYoH8iw6xqEGvinO5g",
  authDomain: "js-230413.firebaseapp.com",
  projectId: "js-230413",
  storageBucket: "js-230413.appspot.com",
  messagingSenderId: "213882115367",
  appId: "1:213882115367:web:a2a727b1cbebd530600502",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const store = getStorage(app);

export { store };
