import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }


  // Login 
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }


  // LogOut
  const logOut = () => {
    return signOut(auth);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('currentUser:', currentUser);
      setUser(currentUser);
    })
    return () => {
      return unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    login,
    logOut

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