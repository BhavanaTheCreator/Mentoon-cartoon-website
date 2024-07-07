import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../components/context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Track from '../../components/Track/Track'
import Testimonial from '../../components/Testimonial/Testimonial'
import { Link } from 'react-router-dom'
import {addToCart,deleteFromCart} from '../../redux/cartSlice'
import { useSelector,useDispatch } from 'react-redux'

function Home() {
  const dispatch = useDispatch();
  const cartitem = useSelector((state)=> state.cart)

  const addCart = () => {
    dispatch(addToCart("comic"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("comic"));
  }
  

  return (
    <Layout>
      <div className = "flex gap-5 justify-center">
        <button className = 'bg-gray-300 p-5' onClick={()=>addCart()}>Add</button>
        <button className = 'bg-gray-300 p-5' onClick={()=>deleteCart()}>Del</button>
      </div>
     <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home