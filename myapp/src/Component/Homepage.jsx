import React from "react";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";


const Homepage = () => {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  async function getData(page) {
    console.log(page);
    try {
      let res = await axios.get(`http://localhost:5000`, {
        params: { page: page },
      });

      setProducts((prev) => {
        return [...new Set([...prev, ...res.data.data.map((item) => item)])];
      });
    } catch (error) {
      console.log(error);
    }
  }

  const observer = useRef();

  // ********************************* Infinite scrolling code  *************************

  const onScroll = () => {
    
    if (observer.current) {
      const { scrollTop, scrollHeight, clientHeight } = observer.current;
      
      if (
        Math.ceil(scrollTop + clientHeight) === Math.floor(scrollHeight) ||
        Math.ceil(scrollTop + clientHeight + 1) === Math.floor(scrollHeight)
      ) {
        // console.log("reached bottom");

        setPage((prev) => prev + 1);
      }
    }
  };
  // ***************************************************

  // console.log(products);
  useEffect(() => {
    getData(page);
  }, [page]);

  return (
    <div
      onScroll={onScroll}
      ref={observer}
      style={{ height: "100vh", overflowY: "scroll" }}
    >
      { products.length > 0 &&  products.map((item, index) => {
        return (
          <div key={index}>
            <ProductCard {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
