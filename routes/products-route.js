import { Router } from "express";
import products from "../products/products.js";
const productsRoutes = Router();

productsRoutes.get("/", (req, res) => {
  return res.send(products);
});

productsRoutes.get("/:id", (req, res) => {
  const id = req.params.id;

  const product = products.filter((product) => product.Id == id);

  res.json(product[0]);
});

export default productsRoutes;
