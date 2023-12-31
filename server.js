const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const frontend = require("./html_route");
const userRoute = require("./endpoint/miamiRoute");
const PORT = 3180;

const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/v1/clients", userRoute);
app.use(express.static("frontend"));
app.use("/frontend", frontend);
app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200);
  res.statusMessage = "Everything is okay with the request";
    const body = `<h2>Welcome To Ore's Relaxation Hub</h2>
       <p>Your one stop relaxation hub</p>`;
  res.send(body);
});

// api route
// looking to extend the functionality of this app

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
module.exports = app;
