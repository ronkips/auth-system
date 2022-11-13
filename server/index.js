const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
app.post("/api/register", (req, res) => {
  const { email, password, tel, username } = req.body;
  //Logs the crentedials to the console
  console.log({ email, password, tel, username });
});
