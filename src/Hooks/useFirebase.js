import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";



// Firebase initialization
initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                saveUser(user.email, user?.displayName, 'PUT')
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // create user
    const registerUser = (name, email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const user = result.user;
                const newUser = { ...user, displayName: name }
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                saveUser(email, name, 'POST')
                setUser(newUser)

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Sign In user
    const loginUser = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                const user = result.user;
                setUser(user)
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //observe state change 

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unSubscribed;
    }, []);

    // Set Admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // Save User
    const saveUser = (email, name, method) => {
        const user = { email: email, name: name }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { })
    }


    // Log Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        authError,
        isLoading,
        signInUsingGoogle,
        registerUser,
        loginUser,
        admin,
        logOut
    }
};

export default useFirebase;