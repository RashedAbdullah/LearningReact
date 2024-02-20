import { createBrowserRouter } from 'react-router-dom';
import Layout from './../Layout';
import NotFound from './../NotFound';

const RoutingPage = createBrowserRouter([
    {
        element: <Layout />,
        path: "/",
        children: [
            {<h2>Home page</h
                element: 2>,
                path: "/"
            },
            {
                element: <h2>Project page</h2>,
                path: "/project"
            },
            {
                element: <h2>Contact page</h2>,
                path: "/contact"
            },
            {
                element: <h2>About page</h2>,
                path: "/about"
            },
            // {
            //     element: <h2>Not Found 404</h2>,
            //     path: "/*"
            // }
        ]
    },
    {
        element: <NotFound/>,
        path: "/*"
    }

]);
export default RoutingPage;
