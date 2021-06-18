import { useContext } from "react";
import Amplify from "aws-amplify";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Head from 'next/head'
import { AuthContext } from "./_app";
import AuthModal from "../components/auth/AuthModal";
import styles from '../styles/Home.module.css'
import awsExports from "../src/aws-exports";

Amplify.configure(awsExports);

export default function Home() {
  const auth = useContext(AuthContext)
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabletop Tools</title>
        <meta name="description" content="Coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {auth.user && <h1>Welcome, {auth.user.username}</h1>}
        <div className={styles.MarqueeTxt}>
          WATCH THIS SPACE
        </div>
        {auth.authState === 'signedin' ?
        <AmplifySignOut className={styles.signOut} />
        :
        <AuthModal />
        }
      </main>
    </div>
  )
}
