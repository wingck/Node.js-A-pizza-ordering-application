//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const pizza = require("./modules/pizza/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
app.get("/", async (request, response) => {
  let pizzaList = await pizza.getPizza();
  console.log(pizzaList);
  response.render("index", { title: "Pizza", pizzas: pizzaList });
});

app.get("/pizza-info", async (request, response) => {
  let pizzaId = request.query.id;
  let infoList = await pizza.getOnePizza(pizzaId);
  response.render("info", { title: "Info", info: infoList });
});
app.get("/cart", async (request, response) => {
  response.render("cart", { title: "Cart" });
});
app.get("/drinks", async (request, response) => {
  let drinkList = await pizza.getDrink();
  console.log(drinkList);
  response.render("drinks", { title: "Drinks", drinks: drinkList });
});
//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


