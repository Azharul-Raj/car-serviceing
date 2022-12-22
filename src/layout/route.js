import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Form/Login";
import Main from "./Main";
import Register from "../pages/Form/Register";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import Protected from "../pages/Protected/Protected";
import Map from "../pages/Map/Map";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/map',
                element:<Map/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/register',
                element:<Register/>
            },
            {
                path: '/checkout/:id',
                element:<Protected><Checkout/></Protected>
            },
            {
                path: '/orders',
                element: <Protected><Orders/></Protected>
                // <Protected><Orders/></Protected>
            }
        ]
    }
])