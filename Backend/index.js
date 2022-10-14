const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const productsData = response.data;
    console.log(productsData)

    let page = Number(req.query.page);
    const limit = 4;
    const totalPages = Math.floor(productsData.length / limit);
console.log(totalPages)
    page = page % totalPages; // if page passed from request is more than totalPage then change it to its reminder with totalPage.

    console.log(req.query.page)
    const start = (page - 1) * limit;
    const end = page * limit;

    const newData = productsData.slice(start, end);

    res.status(200).send({ data: newData, page: page });
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log("connected");
});
