import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.FIRE_BASE_API,
    authDomain: process.env.FR_AUTHDOMAIN,
    projectId: "swiftmark-b9df0",
    storageBucket: "swiftmark-b9df0.firebasestorage.app",
    messagingSenderId: "69980093595",
    appId: process.env.FR_APP_ID,
    measurementId: "G-VW4TGJ67H5"
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp

// https://console.firebase.google.com/u/0/project/swiftmark-5cb88/overview
/**
 * FireBase hesabı oluşturduktan sonra kodu sitede yazdıgım baglantıdan aldım
 * 
 */