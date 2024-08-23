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
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import AddReviews from "../pages/AddReviews/AddReviews";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader:()=>fetch('https://globeglimpse.vercel.app/addTousristSpot')
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
          loader:()=>fetch('https://globeglimpse.vercel.app/addTousristSpot')
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
          loader:({params})=> fetch(`https://globeglimpse.vercel.app/updateTourist/${params.id}`)
        },
        {
          path:'/details/:id',
          element: <PrivateRoute>
              <DetailsPage></DetailsPage>
          </PrivateRoute> ,
          loader:({params})=> fetch(`https://globeglimpse.vercel.app/details/${params.id}`)
        },
        {
          path:'/ReleteCountryData/:countryName',
          element: <ReleteCountryData></ReleteCountryData>,
          loader:({params})=>fetch(`https://globeglimpse.vercel.app/ReleteCountryData/${params.countryName}`)
        },
        {
          path:'/profile',
          element:<Profile></Profile>
        },
        {
          path:'/updateProfile',
          element:<UpdateProfile></UpdateProfile>
        },
        {
          path:'/addReviews',
          element:<PrivateRoute><AddReviews></AddReviews></PrivateRoute>
        }
       
      ]
    },
  ]);

  export default router;