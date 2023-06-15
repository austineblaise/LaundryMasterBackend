import express from "express";
import userRouter from "./routes/users.js";
import productRouter from "./routes/product.js";
import orderRouter from "./routes/order.js";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello to laundrymasters API....");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
































// import express from "express";
// import userRouter from "./routes/users.js";
// import productRouter from "./routes/product.js";
// import orderRouter from "./routes/order.js";
// import colors from "colors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import path from "path";
// dotenv.config();
// connectDB();
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/user", userRouter);
// app.use("/api/products", productRouter);
// app.use("/api/orders", orderRouter);

// const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("hello to laundrymasters API....");
//   });
// }

// const PORT = process.env.PORT || 5000;

// app.listen(
//   PORT,
//   console.log(
//     `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
//   )
// );
