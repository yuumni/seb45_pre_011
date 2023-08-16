const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors()); // CORS 설정
app.use(bodyParser.json());
const posts = [];

app.post("/user/login", (req, res) => {
  const { email, password: pwd } = req.body;
  if (email === "test@test.com" && pwd === "password") {
    const login = { email: email, token: "token", loggedIn: true };
    posts.push(login);
    console.log("Login success:", email);
    res.status(201).json(login);
  } else {
    console.log("Login failed:", email);
    res.status(401).json({ error: "Invalid credentials" }); // 로그인 실패
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
