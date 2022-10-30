import React, { useEffect, useState } from "react";
import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
} from "../config";
import Avater from "./pic";

// create our root component => App component
function Home() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false)
  const Sign = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };


//   siginout of firebase
const signOut =(event) =>{
    event.preventDefault();
    auth.signOut().then (() =>{
    alert("Sign out!")
    });
}

  // get the redirect result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        // get the result
        if (result) {
          result(true);
          // set the user
        } else {
          setSignedIn(result.user);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // set the user
        // setSignedIn(true);
        console.log(user);
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
        setAuthenticated(true)
      } else {
        // User is signed out
        // ...
        setUser(null);
        setAuthenticated(false)
      }
    });
  }, []);

  return (
    <section>
      {user ? ( authenticated ? ( 
        <div>
            <div>
            <div> Welcome you have Sign in</div>
            <Avater/>
          <div>{user.displayName}</div>
          <div>{user.email}</div>
          <button onClick={signOut}>Sign out</button>
</div>
        </div>
      ) : (
        <div>please wait</div>)
      ): (
        <div>
          <div style={signedIn ? {} : { display: "none" }}>
            Signed in Successful
          </div>
          <div> Sign in to access your account</div>
          <button onClick={Sign}>Sign in</button>
          </div>
        
      )}
    </section>
  );
}

export default Home;
