import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBptRPKL8WLyT0gU7xcxpyfa1SCaoABzW4",
    authDomain: "catchoftheday-1b134.firebaseapp.com",
    databaseURL: "https://catchoftheday-1b134-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;