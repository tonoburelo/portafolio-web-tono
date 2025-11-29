const express = require("express");
const path = require("path");

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/projects", (req, res) => res.render("projects"));
app.get("/contact", (req, res) => res.render("contact"));

app.get("/projects/projects-inpi", (req, res) => res.render("projects/projects-inpi"));
app.get("/projects/projects-typingapp", (req, res) => res.render("projects/projects-typingapp"));
app.get("/projects/projects-comportamiento_clientes", (req, res) => res.render("projects/projects-comportamiento_clientes"));
app.get("/projects/projects-salario_ciencia_datos", (req, res) => res.render("projects/projects-salario_ciencia_datos"));
app.get("/projects/projects-predecir_seguros", (req, res) => res.render("projects/projects-predecir_seguros"));
app.get("/projects/projects-friends", (req, res) => res.render("projects/projects-friends"));
app.get("/projects/projects-pizzeria", (req, res) => res.render("projects/projects-pizzeria"));
app.get("/projects/projects-libros", (req, res) => res.render("projects/projects-libros"));

// Servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor en http://localhost:${port}`));


