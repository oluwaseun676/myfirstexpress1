const express = require("express");
const path = require("path");
const requestRouter = express.Router();
requestRouter.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "html", "miami.html"));
  console.log("file sent");
  return;
});
requestRouter.get("/about", async (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "html", "about.html"));
  return;
});
requestRouter.get("/menu", async (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "html", "services.html"));
    return;
  });
module.exports = requestRouter;
