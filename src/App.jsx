import ErrorElement from "./components/ErrorElement";
import {
  HomeLayout,
  About,
  Card,
  Register,
  Landing,
  Products,
  SingleProduct,
  Orders,
  Login,
  Error,
  Checkout
} from "./pages";
import { loader as LandingLoader } from "./pages/Landing";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { ProtectedRoutes } from "./components";
import { useSelector } from "react-redux";

import {action as RegisterAction} from './pages/Register'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/fireBaseConfig";
import { authReady } from "./features/user/userSlice";

import { login } from "./features/user/userSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch()
  const {user, authReadyState} = useSelector((state)=> state.userState);
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <ProtectedRoutes user={user}>
        <HomeLayout/>
      </ProtectedRoutes>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element: <Landing/>,
          errorElement: <ErrorElement/>,
          loader: LandingLoader
        },
        {
          path:"/products",
          element:<Products/>,
          loader:ProductsLoader
        },
        {
          path:"/product/:id",
          element:<SingleProduct/>,
          loader:SingleProductLoader
        },
        {
          path:"/card",
          element:<Card/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/checkout",
          element:<Checkout/>
        },
      ]
    },
    {
      path:"/login",
      errorElement:<Error/>,
      element: user ? <Navigate to="/"/> : <Login/>
    },
    {
      path:"/register",
      errorElement:<Error/>,
      element: user ? <Navigate to="/"/> : <Register/>,
      action:RegisterAction
    }
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      dispatch(login(user))
      dispatch(authReady())
    })
  },[])
  return <>{authReady && <RouterProvider router={routes}/>}</>
}

export default App;
