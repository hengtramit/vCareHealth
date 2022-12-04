// import logo from './logo.svg';
// import './App.css';
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

// Amplify.configure(awsconfig)


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <AmplifySignOut />
//         <h2>App Content</h2>
//       </header>
//     </div>
//   );
// }

// export default withAuthenticator(App);

import React from 'react';
import './App.css';

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);