import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import TelegramBot from "node-telegram-bot-api";
import ym from "react-yandex-metrika";

const token = "1938841236:AAHvKPJSc4izL-53gm-SdbzcWDMMTwTc6V0";
const chatId = "-509225291";

// ym("getClientID");

const Home: NextPage = () => {
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({ firstName, phone });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next App Form</title>
        <meta name="description" content="Next App Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Box
            sx={{
              flexGrow: 1,
              padding: "30px",
              maxWidth: "700px",
              margin: "30px auto",
              background: "#fff",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#000",
              }}
            >
              Простая форма
            </Typography>
            <Box
              sx={{
                marginTop: "30px",
              }}
              id="tg"
              component="form"
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Имя"
                variant="outlined"
                fullWidth
                sx={{
                  marginBottom: "20px !important",
                }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <TextField
                label="Телефон"
                variant="outlined"
                fullWidth
                sx={{
                  marginBottom: "20px !important",
                }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Button
                variant="contained"
                type="submit"
                color="primary"
                sx={{ width: "100%", fontSize: "16px" }}
                onClick={submitForm}
              >
                Отправить
              </Button>
            </Box>
          </Box>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
