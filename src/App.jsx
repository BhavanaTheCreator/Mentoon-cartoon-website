import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard.jsx';
import NoPage from './pages/nopage/NoPage';
import MyState from './components/context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productinfo/Productinfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
function App() {
  return (
    
    <MyState>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/Admin" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
             </ProtectedRouteForAdmin>
          } /> */}
          <Route path="/Admin" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>}/>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/updateproduct' element={<UpdateProduct/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>

  )
}

// export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'bhavnamishra.jbp@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}
export default App 