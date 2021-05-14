import './App.css';
import React, { useState, useRef } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  //config
})



function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}


export default App;
