const express = require("express");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

const shops = [1];
const pizzasMap = {
  1: [
    { id: 101, type: "veg", name: "Margherita" },
    { id: 102, type: "veg", name: "Farmhouse" },
    { id: 103, type: "non-veg", name: "Pepperoni" },
  ],
};

const beveragesMap = {
  101: [
    { id: 201, name: "Coke", pizzaId: 101 },
    { id: 202, name: "Sprite", pizzaId: 101 },
  ],
  102: [{ id: 203, name: "Fanta", pizzaId: 102 }],
  103: [{ id: 204, name: "Pepsi", pizzaId: 103 }],
};

app.get("/api/pizzahub", (req, res) => {
  setTimeout(() => res.json(shops), 300);
});

app.get("/api/pizzahub/pizzas/:shopId", (req, res) => {
  const shopId = Number(req.params.shopId);
  const list = pizzasMap[shopId] || [];
  setTimeout(() => res.json(list), 300);
});

app.get("/api/pizzahub/beverages/:pizzaId", (req, res) => {
  const pizzaId = Number(req.params.pizzaId);
  const list = beveragesMap[pizzaId] || [];
  setTimeout(() => res.json(list), 300);
});

app.post("/api/order", (req, res) => {
  const { pizzaId, beverageId } = req.body || {};
  if (!pizzaId || !beverageId) {
    return res.status(400).json({ error: "pizzaId and beverageId required" });
  }
  const order = {
    id: Math.floor(Math.random() * 1000000),
    pizzaId,
    beverageId,
    createdAt: Date.now(),
  };
  setTimeout(() => res.status(201).json(order), 300);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Mock PizzaHub API listening on http://localhost:${port}`);
});
