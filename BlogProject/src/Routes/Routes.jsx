import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import About from '../pages/About';

export const routes = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <p>Your page is not found 404</p>,
        children: [
            {
                element: <Home />,
                path: "/",
            },
            {
                element: <Blogs/>,
                path: "/blogs"
            },
            {
                element: <About/>,
                path: "/about"
            }
        ]
    }
])