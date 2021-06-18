import { createContext, useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import '../styles/globals.css'

export const AuthContext = createContext({
  authState: undefined,
  setAuthState: () => {},
  user: undefined,
  setUser: () => {},
});

function MyApp({ Component, pageProps }) {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const auth = {
    authState,
    setAuthState,
    user,
    setUser
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setAuthState('signedin');
        setUser(user);
      })
  }, []);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData)
    });
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default MyApp
