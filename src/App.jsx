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
          element: <Landing/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/product/:id",
          element:<SingleProduct/>
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
