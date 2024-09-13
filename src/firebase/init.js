// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDcC54SqAJjQqe2qrV5EYviNT7IcBFQaNE',
	authDomain: 'week7-mark.firebaseapp.com',
	projectId: 'week7-mark',
	storageBucket: 'week7-mark.appspot.com',
	messagingSenderId: '244995469352',
	appId: '1:244995469352:web:3d337d5e487f1b0d5c851d'
};

// Initialize Firebase
const db = getFirestore(initializeApp(firebaseConfig));
export default db;
