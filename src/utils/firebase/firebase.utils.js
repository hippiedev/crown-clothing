import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeFh6aN3mWoEPzr0U-USVmz50P_4zpxBk",
  authDomain: "crown-clothing-db-51af1.firebaseapp.com",
  projectId: "crown-clothing-db-51af1",
  storageBucket: "crown-clothing-db-51af1.appspot.com",
  messagingSenderId: "342866332071",
  appId: "1:342866332071:web:cfc18d1ece16cca1734e82",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch(error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef
}
