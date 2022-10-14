import React from "react";
import { useSelector } from "react-redux";
import styles from '../Styled/productcard.module.css'

const CartPage = () => {
  const {CartItems} = useSelector((state) => state.appReducer);

  return (
    <div>
      {CartItems.length > 0 &&
        CartItems.map((item, index) => {
          return (
            <div className={styles.cont} key={index}>
              <div></div>
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

                <p>Cost: Rs. {item.price}</p>

                
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CartPage;
