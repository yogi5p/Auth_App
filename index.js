const http = require("http");
const fs = require("fs");
const express = require("express");

const hostname = "localhost";
const port = 3030;

const app = express();
app.set("port", process.env.PORT || 3030);

const handlebars = require("express-handlebars").create({
  defaultLayout: "main"
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/beginning", (request, response) => {
  response.render("beginning");
});

app.get("/middle", (request, response) => {
  response.render("middle");
});

app.get("/nextpage1", (request, response) => {
  response.render("nextpage1");
});

app.get("/nextpage2", (request, response) => {
  response.render("nextpage2");
});

app.get("/nextpage3", (request, response) => {
  response.render("nextpage3");
});

app.get("/end", (request, response) => {
  response.render("end");
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.use((request, response) => {
  response.status(404);
  response.render("404");
});

app.listen(app.get("port"), () => {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; press Ctrl-C to terminate."
  );
});
