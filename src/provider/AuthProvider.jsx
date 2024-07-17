import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }


  // Login 
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }


  // LogOut
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('currentUser:', currentUser);
      setLoading(false)
      setUser(currentUser);
    })
    return () => {
      return unsubscribe();
    }
  }, [])

  
  if(loading) {
    <span className="loading loading-spinner loading-lg text-error"></span>
  }

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut,


  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export default AuthProvider;