import Firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBXvAGzOwZyRHJya1VZ1lJPHhc-SB5s1To",
    authDomain: "legalbillreview-5740d.firebaseapp.com",
    databaseURL: "https://legalbillreview-5740d.firebaseio.com",
    projectId: "legalbillreview-5740d",
    storageBucket: "legalbillreview-5740d.appspot.com",
    messagingSenderId: "588920881054"
  };
  firebase.initializeApp(config);
  
  export default Firebase;
