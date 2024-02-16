const express = require("express");
const app = express();
const PORT = 5050;

// EJS
app.set("view engine", "ejs");

//Статичная папка
app.use(express.static("public"));

// Преобразование данных из буфера в читаемый вид
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// Рендер главной страницы
app.get(["/", "/index"], (req, res) => {
	res.render("index", { activePage: "index" });
});


app.listen(PORT, () => {
	console.log("см. тут: http://localhost:" + PORT);
});