import Dialog from '@reach/dialog';
import "@reach/dialog/styles.css";
import { useState } from 'react';
import { AmplifyAuthContainer, AmplifyAuthenticator, AmplifyButton, AmplifySignIn, AmplifySignUp } from "@aws-amplify/ui-react";
import styles from '../../styles/Home.module.css';

const AuthModal = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const closeButton = (
    <button className={styles.closeButton} onClick={close}>
      <span aria-hidden>×</span>
    </button>
  )

  return (
    <div>
      <AmplifyButton onClick={open}>Sign In</AmplifyButton>
      <Dialog
        className={styles.authDialog}
        isOpen={showDialog}
        onDismiss={close}
      >
        <AmplifyAuthContainer>
          <AmplifyAuthenticator
            className="styles.authenticator"
            hide-default={true}
          >
            <AmplifySignIn slot="sign-in">
              <button
                className={styles.closeButton}
                onClick={close}
                slot="federated-buttons"
              >
                <span aria-hidden>×</span>
              </button>
            </AmplifySignIn>
            <AmplifySignUp
              slot="sign-up"
              formFields={[
                {type: 'username', inputProps: {required: true}},
                {type: 'password', inputProps: {required: true}},
                {type: 'email', inputProps: {required: true}},
              ]}
            >
              <button
                className={styles.closeButton}
                onClick={close}
                slot="header-subtitle"
              >
                <span aria-hidden>×</span>
              </button>
            </AmplifySignUp>
          </ AmplifyAuthenticator>
        </AmplifyAuthContainer>
      </Dialog>
    </div>
  );
}

export default AuthModal;