import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from '../Component/CartPage'

const Routepage = () => {
  return (
    <div>
        <Routes>
            <Route path='/'/>
            <Route path='/cartpage' element={<CartPage/>}/>
        </Routes>
    </div>
  )
}

export default Routepage