import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products-route.js";
import stripeRoute from "./routes/stripe-route.js";
import dotenv from "dotenv";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173/", // use your actual domain name (or localhost), using * is not recommended
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-With",
      "Accept",
      "x-client-key",
      "x-client-token",
      "x-client-secret",
      "Authorization",
    ],
    credentials: true,
  })
);

/* app.use(cors()); */
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Home");
});

app.use("/products", productsRoutes);
app.use("/stripe", stripeRoute);

app.listen(process.env.PORT, () =>
  console.log(`Servidor levantado en el puerto ${process.env.PORT}`)
);
