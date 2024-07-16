import { createBrowserRouter  } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
        children: [{
               path: '/',
               element: <Home/>},
               {
                path: 'login',
                element:<Login/>
               },
               {
                path: 'register',
                element:<Register/>
               }
            ],}
  ]);

  export default router
  