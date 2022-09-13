import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Form from "../components/Form";

// ym("getClientID");

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App Form</title>
        <meta name="description" content="Next App Form" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Form />
        </div>
      </main>
    </div>
  );
};

export default Home;
