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
import {awsconfig} from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig)


function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
