import express from "express";
import rateLimit from "express-rate-limit";

const app = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});
// app.use(limiter); // It limits for all pages

app.get("/", (req, res) => {
  res.send("Hello Chiku from Atul!");
});

app.use("/chiku", limiter); // It limits only for chiku page
app.get("/chiku", (req, res) => {
  res.send("Hello this is  costly api from Atul!");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
