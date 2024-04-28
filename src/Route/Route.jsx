import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../pages/ErrorePage/ErrorPage";
import AllTourist from "../pages/AllTourist/AllTourist";
import MyList from "../pages/MyList/MyList";
import AddTourist from "../pages/AddTourist/AddTourist";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateTourist from "../pages/MyList/UpdateTourist";
import DetailsPage from "../pages/MyList/DetailsPage";
import ReleteCountryData from "../Home/ReleteCountryData";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader:()=>fetch('http://localhost:5000/addTousristSpot')
        },
        
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/allTourist',
          element:<AllTourist></AllTourist>,
          loader:()=>fetch('http://localhost:5000/addTousristSpot')
        },
        {
          path:'/myList',
          element: <PrivateRoute> <MyList></MyList></PrivateRoute> 
        },
        {
          path:'/addTourist',
          element:<PrivateRoute><AddTourist></AddTourist></PrivateRoute>  
        },
        {
          path:'/updateTourist/:id',
          element: <PrivateRoute><UpdateTourist></UpdateTourist></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/updateTourist/${params.id}`)
        },
        {
          path:'/details/:id',
          element: <PrivateRoute>
              <DetailsPage></DetailsPage>
          </PrivateRoute> ,
          loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
          path:'/ReleteCountryData/:countryName',
          element: <ReleteCountryData></ReleteCountryData>,
          loader:({params})=>fetch(`http://localhost:5000/ReleteCountryData/${params.countryName}`)
        }
       
      ]
    },
  ]);

  export default router;