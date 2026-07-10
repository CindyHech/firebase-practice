import React from "react";
import "./App.css";
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setLoading(false);
    console.log(user);
    if (user) {
      setUser(user);
    } else {
      setUser({}); // Reset to empty object when logged out
    }
  });

  return () => unsubscribe(); // Clean up listener on unmount
}, []);


  function register() {
    console.log('register');
    createUserWithEmailAndPassword(auth,'email@email.com', 'test123')
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log (error)
    })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then(({user}) => {
      console.log(user);
      setUser(user);
    })
    .catch((error) => {
      console.log (error.message);
    })
  }

  function logout() {
    signOut(auth)
    .then(() => {
      setUser({})  // Clear the user state on logout
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return <div className="App">
   <button onClick={register}>Register</button> 
   <button onClick={login}>Login</button> 
   <button onClick={logout} >Logout</button>
   {user.email}
   {user && user.email ? <span>{user.email}</span> : <span>Loading...</span>}
    </div>;
}

export default App;
