import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyA4xYQEr4fJ2eEg6NVv44TGJaBJUnDGsqI',
	authDomain: 'clone-c8a23.firebaseapp.com',
	databaseURL: 'https://clone-c8a23.firebaseio.com',
	projectId: 'clone-c8a23',
	storageBucket: 'clone-c8a23.appspot.com',
	messagingSenderId: '851884358049',
	appId: '1:851884358049:web:9116d786e6040e1bbbf3e0',
	measurementId: 'G-YZ9JPBQDYK',
});

const auth = firebase.auth();

export { auth };
