import React from "react";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import styles from '../Styled/homepage.module.css';


const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] =useState(false);

  async function getData(page) {
    console.log(page);
    setLoading(true)
    try {
      let res = await axios.get(`https://stormy-dusk-84078.herokuapp.com/products`, {
        params: { page: page },
      });
      setLoading(false);
      setError(false)
      setProducts((prev) => {
        return [...new Set([...prev, ...res.data.data.map((item) => item)])];
      });
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true)
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
    <>
    <div className={styles.loaderDiv}>
      {loading && <h2>Loading...</h2>}
      {error &&  <h2>Error 500 Internal Server Error</h2>}

    </div>
    <div
   
      onScroll={onScroll}
      ref={observer}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      { products.length > 0 &&  products.map((item, index) => {
        return (
          <div key={index}>
            <ProductCard {...item} />
          </div>
        );
      })}
    </div>
      
    </>
  );
};

export default Homepage;
