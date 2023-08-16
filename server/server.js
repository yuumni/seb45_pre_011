const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Import jsonwebtoken

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
const posts = [];

// Secret key for signing JWT (should be kept secret)
const secretKey = "123-456-789";

// Custom middleware to verify JWT token and set req.user
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Set user data to req.user
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

app.post("/user/login", (req, res) => {
  const { email, password: pwd } = req.body;
  if (email === "test@test.com" && pwd === "password") {
    const user = { email: email, loggedIn: true };
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    console.log("Login success:", email);
    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);

    res.status(201).json({ accessToken, refreshToken });
  } else {
    console.log("Login failed:", email);
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Generate Access Token
const generateAccessToken = (user) => {
  return jwt.sign(user, secretKey, { expiresIn: "15m" });
};

// Generate Refresh Token
const generateRefreshToken = (user) => {
  return jwt.sign(user, secretKey);
};

// Apply the verifyToken middleware to routes that require authentication
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected route accessed", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
