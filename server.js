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
app.get("/api/users", (req, res) => {
  req.query.lang == "ar"
    ? res.send(data.UsersListAr)
    : res.send(data.UsersListEn);
});
app.get("/api/invoices", (req, res) => {
  req.query.lang == "ar"
    ? res.send([
        ...data.InvoicesAr,
        ...data.InvoicesAr,
        ...data.InvoicesAr,
        ...data.InvoicesAr,
      ])
    : res.send([
        ...data.InvoicesEn,
        ...data.InvoicesEn,
        ...data.InvoicesEn,
        ...data.InvoicesEn,
      ]);
});
app.get("/api/contractdetails", (req, res) => {
  req.query.lang == "ar"
    ? res.send(data.ContractDetailsAr)
    : res.send(data.ContractDetailsEn);
});
app.get("/api/lessees", (req, res) => {
  res.send(data.Lessees);
});
app.get("/api/certificates", (req, res) => {
  res.send(data.Certificates);
});
app.get("/api/singlesearch", (req, res) => {
  res.send(data.SingleSearch);
});
app.get("/api/searchresults", (req, res) => {
  res.send(data.SearchResults);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
