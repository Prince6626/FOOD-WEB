import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import SkeletonFooter from "./components/SkeletonFooter";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return(
        <Provider store={appStore}>
            <div className="app">
                <Header/>
                <Outlet/>
                <SkeletonFooter/>
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>)
            },
            {
                path: "/cart",
                element: <Cart/>
            },
        ],
        errorElement: <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);