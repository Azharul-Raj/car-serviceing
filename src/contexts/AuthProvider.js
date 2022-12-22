import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config'

export const authContext = createContext();
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user,setUser]=useState({})
    // emailSignUp
    const emailSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // email login
    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google signIn
    const googleProvider=new GoogleAuthProvider()
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // update user
    const update = (name,image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:image
        })
            .then(() => { })
        .catch(err=>console.error(err))
    }
    // user monitor
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubscribe();
    }
    ,[])
     
    // logOut
    const logOut = () => {
        // localStorage.removeItem('token')
       return signOut(auth)
    .then(() => { })
            .catch(err => console.error(err))
    }
    const allInfo = { loading, user, emailSignUp, emailLogin, googleSignIn, update, logOut };
    return (
        <div>
            <authContext.Provider value={allInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;