import express from "express";
import cors from "cors";
/* import productsRoutes from "./routes/products.js";
import stripeRoute from "./routes/stripe.js"; */
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Home");
});

/* app.use("/products", productsRoutes);
app.use("/stripe", stripeRoute); */

app.listen(process.env.PORT, () =>
  console.log(`Servidor levantado en ${process.env.PORT}.env.PORT`)
);
