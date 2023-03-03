import Stripe from "stripe";
import { Router } from "express";
import dotenv from "dotenv";

dotenv.config();

const stripe = Stripe(`${process.env.STRIPE_KEY}`);
const stripeRoute = Router();

stripeRoute.post("/create-checkout-session", async (req, res) => {
  const data = req.body.products.map((item) => {
    return {
      price_data: {
        currency: "ars",
        product_data: {
          name: item.Nombre,
          images: [item.Imagen],
        },
        unit_amount: item.Precio * 100000,
      },
      quantity: item.Cantidad,
    };
  });
  console.log(data);
  const session = await stripe.checkout.sessions.create({
    line_items: data,
    mode: "payment",
    success_url: "http://127.0.0.1:5173/product",
    cancel_url: "http://127.0.0.1:5173",
  });

  res.send({ url: session.url });
});

export default stripeRoute;
