import styles from '../styles/Home.module.css';
import fire from '../config/fire-config';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  const signWithGoogle = () => {
    const provider = new fire.auth.GoogleAuthProvider();

    fire
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        router.push('home');
      })
      .catch(function (error) {
        alert('Não foi possível conectar');
      });
  };

  return (
    <>
      <Head>
        <title>Detratores.com - Ganhe um selo de detrator</title>
        <meta name="description" content="Ganhe um selo de detrator" />
      </Head>

      <div className={styles.container}>
        <h1>Ganhe o selo de detrator em poucos segundos</h1>
        <img src="data:image/jpeg;base64,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" />

        {!agree && (
          <>
            Li e concordo com os{' '}
            <a href="termos" className={styles.link}>
              termos de uso e privacidade
            </a>
            <button className={styles.btn} onClick={() => setAgree(true)}>
              CONCORDO
            </button>
          </>
        )}

        {agree && (
          <>
            <button className={styles.btn_google} onClick={signWithGoogle}>
              LOGAR COM GOOGLE
            </button>
            <a href="termos" className={styles.link}>
              Política Privacidade
            </a>
          </>
        )}
        <div className={styles.contact}>
          Esse é um aplicativo sem fins comerciais
        </div>
        <br />
        <div className={styles.contact}>
          Qualquer dúvida entre em contato: contato@detratores.com
        </div>
      </div>
    </>
  );
}
