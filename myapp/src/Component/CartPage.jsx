import React from "react";
import { useSelector } from "react-redux";
import styles from '../Styled/productcard.module.css'
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const {CartItems} = useSelector((state) => state.appReducer);
//   console.log(CartItems)
const navigate = useNavigate();

const moveBack = ()=>{
    return navigate('/')
}

  return (
    <>
         <div className={styles.topDiv}>
            <h2>Cart Page</h2>
            <button className={styles.btn} onClick={moveBack}>Go Back</button>
         </div>

      {CartItems.length > 0 &&
        CartItems.map((item, index) => {
          return (
            <div className={styles.cont} key={index}>
             
              <div>
                <img
                  className={styles.img}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <p>Cost: Rs. <strong>{item.price}</strong></p>

                
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CartPage;
