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
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <HomeLayout/>,
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
      element:<Login/>
    },
    {
      path:"/register",
      errorElement:<Error/>,
      element:<Register/>
    }
  ]);
  return  <RouterProvider router={routes}/>;
}

export default App;
