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

// An array containing all the users
const users = [];
// Generate the random string as the ID
const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/api/regiter", (req, res) => {
  // Get the user's credentials
  const { email, password, tel, username } = req.body;

  // Check if there is an existing user with the same email or password
  let result = users.filter((user) => user.email === email || user.tel === tel);
  // if none
  if (result.length === 0) {
    // create the structure for the user
    const newUser = { id: generateID(), email, password, username, tel };
    //Add user to the array of users
    users.push(newUser);
    // Returns a message
    return res.json({
      message: "Account created successfully"
    });
  }
  // Returns the user exists
  res.json({
    error_message: "User already exists"
  });
});
