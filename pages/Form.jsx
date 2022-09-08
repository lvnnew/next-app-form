import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

const Form = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      phone: event.target.phone.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);

    const result = await response.json();
    alert(result.data);
  };
  return (
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
      <form action="/api/form" method="post" onSubmit={handleSubmit}>
        <TextField
          label="Имя"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "20px !important",
          }}
          type="text"
          id="name"
          name="name"
          required
        />

        <TextField
          label="Телефон"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "20px !important",
          }}
          type="text"
          id="phone"
          name="phone"
          required
        />

        <Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{ width: "100%", fontSize: "16px" }}
        >
          Отправить
        </Button>
      </form>
    </Box>
  );
};

export default Form;
