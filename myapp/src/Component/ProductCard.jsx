import React from "react";
import styles from "../Styled/productcard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
 
    return navigate('/cartpage')
  };

  return (
    <div className={styles.cont}>
      <div></div>
      <div>
        <img className={styles.img} src={props.image} alt={props.title} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>

        <p>Cost: Rs. {props.price}</p>

        <button onClick={() => handleAddToCart(props)} className={styles.btn}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
