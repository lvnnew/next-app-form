import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import TelegramBot from "node-telegram-bot-api";
import ym from "react-yandex-metrika";
import Form from "./Form";

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
