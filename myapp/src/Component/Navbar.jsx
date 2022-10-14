import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styled/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
        <Link className={styles.link} to ='/'>Home</Link>
        <Link className={styles.link}  to = '/cartpage'>Cart</Link>
    </div>
  )
}

export default Navbar