import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from '../Component/CartPage'
import Homepage from '../Component/Homepage'
import PageNotFound from '../Component/PageNotFound'

const Routepage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/cartpage' element={<CartPage/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default Routepage