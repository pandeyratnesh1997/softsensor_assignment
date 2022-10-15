const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "https://fakeapiecommerce.netlify.app",
  })
);
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const productsData = response.data;

    let page = Number(req.query.page);
    const limit = 4;
    const totalPages = Math.floor(productsData.length / limit);

    page = page % totalPages; // if page passed from request is more than totalPage then change it to its reminder with totalPage.

    console.log(req.query.page);
    const start = (page - 1) * limit;
    const end = page * limit;

    const newData = productsData.slice(start, end);

    res.status(200).send({ data: newData, page: page });
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log("connected");
});
