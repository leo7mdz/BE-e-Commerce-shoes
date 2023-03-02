import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products-route.js";
import stripeRoute from "./routes/stripe-route.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Home");
});

app.use("/products", productsRoutes);
app.use("/stripe", stripeRoute);

app.listen(process.env.PORT, () =>
  console.log(`Servidor levantado en el puerto ${process.env.PORT}`)
);
