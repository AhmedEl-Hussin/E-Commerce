import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import NotFound from './Shared/NotFound/NotFound'
import Home from './Commponents/Home/Home'
import Brands from './Commponents/Brands/Brands'
import Cart from './Commponents/Cart/Cart'
import AllOrders from './Commponents/AllOrders/AllOrders'
import AuthLayout from './Shared/AuthLayout/AuthLayout';
import Login from './Commponents/Login/Login'
import Register from './Commponents/Register/Register'
import ReqRestPassword from './Commponents/ReqRestPassword/ReqRestPassword'
import RestPassword from './Commponents/RestPassword/RestPassword'
import ChangePassword from './Commponents/ChangePassword/ChangePassword'
import MasterLayout from './Shared/MasterLayout/MasterLayout'
import ProductDetails from './Shared/ProductDetails/ProductDetails'

function App() {

  const routes = createBrowserRouter([

    {
      path : "dashboard",
      element : <MasterLayout/>,
      errorElement : <NotFound/>,
      children : [
        {index : true , element : <Home/> },
        {path : "brands" , element : <Brands/> },
        {path : "cart" , element : <Cart/> },
        {path : "allorders" , element : <AllOrders/> },
        {path : "product-details/:id" , element : <ProductDetails/> },

      ]
    },

    {
      path: '/',
      element : <AuthLayout/>,
      errorElement : <NotFound/>,
      children : [
        {index : true , element : <Login/>},
        {path : "login" , element :<Login/> },
        {path : "register" , element : <Register/> },
        {path : "reqRestPassword" , element : <ReqRestPassword/> },
        {path : "restPassword" , element :<RestPassword/> },
        {path : "changePassword" , element :<ChangePassword/> },
      ]
    }

  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
