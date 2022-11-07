import React, { useContext } from 'react'
import Checkout from '../components/Checkout/Checkout'
import { ItemQtyContext } from '../components/context/ItemQtyContext'

const CheckoutView = () => {
  return (
    <>
        <Checkout />
    </>
  )
}

export default CheckoutView