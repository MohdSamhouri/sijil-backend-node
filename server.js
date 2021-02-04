const express = require("express");
const dotenv = require("dotenv");
const data = require("./data");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.get("/api/lessoracceptance", (req, res) => {
  res.send(data.lessorAcceptanceRate[req.query.period]);
});
app.get("/api/servicerequests", (req, res) => {
  res.send(data.lessorAcceptanceRate[req.query.period]);
});

app.get("/api/homerequests", (req, res) => {
  req.query.lang == "ar"
    ? res.send(data.homeRequestsAr)
    : res.send(data.homeRequestsEn);
});
app.get("/api/servicestatuses", (req, res) => {
  req.query.lang == "ar"
    ? res.send(data.ServiceStatusesAr)
    : res.send(data.ServiceStatusesEn);
});
app.get("/api/serviceslist", (req, res) => {
  res.send(data.servicesList);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
