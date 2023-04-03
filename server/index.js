const express = require("express");
const cors = require("cors");
const app = express();
const { Novu } = require("@novu/node");
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const users = [];
const novu = new Novu("451f1b25db3c33d2a81336a94d4b8a45");
// let code;
const generateID = () => Math.random().toString(36).substring(2, 10);
// Generate the code to be sent via SMS
const sendNovuNotification = async (recipient, verificationCode) => {
  try {
    let response = await novu.trigger("<NOTIFICATION_TEMPLATE_ID>", {
      to: {
        subscriberId: recipient,
        phone: recipient
      },
      payload: {
        code: verificationCode
      }
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

app.get("/api", (req, res) => {
  res.json({ message: "Hello there" });
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
// app.post("/api/register", (req, res) => {
//   const { email, password, tel, username } = req.body;
//   //Logs the crentedials to the console
//   console.log({ email, password, tel, username });
// });

// An array containing all the users
// Generate the random string as the ID

// Post route to authendicate the user
app.post("/api/login", (req, res) => {
  // Accepts the user's credentials
  const { email, password } = req.body;
  // Checks for user(s) with the same email and password
  let result = users.filter(
    (user) => user.email === email && user.password === password
  );

  // If no user exists, it returns an error message
  if (result.length !== 1) {
    return res.json({
      error_message: "Incorrect credentials"
    });
  }
  console.log("Telephone Number", result[0].tel);
  code = generateID();
  /* 
		 Log the user's number and the code sent 
		to the console during development
	*/
  console.log("Telephone Number", result[0].tel);
  // console.log(`Generated code is ${code}`);

  // Send the SMS via Novu
  sendNovuNotification(result[0].tel, code);

  // Returns the username of the user after a successful login
  res.json({
    message: "Login successfully",
    data: {
      username: result[0].username
    }
  });
});

app.post("/api/regiter", (req, res) => {
  // Get the user's credentials
  const { email, password, tel, username } = req.body;

  // Check if there is an existing user with the same email or password
  let result = users.filter((user) => user.email === email || user.tel === tel);
  // if none
  if (result.length === 0) {
    // create the structure for the user
    const newUser = { id: generateID(), email, password, tel, username };
    //Add user to the array of users
    users.push(newUser);
    console.log(newUser)
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

app.post("/api/verification", (req, res) => {
  if (code === req.body) {
    return res.json({ message: "You are verified successfullt" });
  }
  res.json({
    error_message: " Incorrect credential"
  });
});
