// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyCkEO2eRJ_Nw81IUswL9s5lWCC6tkQd5lM",
    authDomain: "learning-course-fd278.firebaseapp.com",
    projectId: "learning-course-fd278",
    storageBucket: "learning-course-fd278.appspot.com",
    messagingSenderId: "601878956872",
    appId: "1:601878956872:web:cb393259402fbdb578817d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app