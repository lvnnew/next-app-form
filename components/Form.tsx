import React from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import ym from "react-yandex-metrika";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { request } from "http";
import { CropLandscapeOutlined } from "@mui/icons-material";
interface IFormInput {
  name: string;
  phone: string;
}

const Form = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);

    axios
      .post("/api/form", data)
      .then((response) => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
  };

  return (
    <Box
      sx={{
        padding: "30px",
        maxWidth: "700px",
        margin: "30px auto",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#000",
          marginBottom: "20px",
        }}
      >
        Простая форма
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          padding: "30px",
          maxWidth: "700px",
          margin: "30px auto",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          {...register("name")}
          onChange={() => {
            ym("reachGoal", "FirstInput");
          }}
        />
        <input
          {...register("phone")}
          onChange={() => {
            ym("reachGoal", "SecondInput");
          }}
        />
        <button
          type="submit"
          onClick={() => {
            ym("reachGoal", "FormButton");
            ym("getClientID", function (clientID: string) {
              return clientID;
            });
          }}
        >
          Отправить
        </button>
      </form>
    </Box>
  );
};

export default Form;
