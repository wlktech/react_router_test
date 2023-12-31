import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import BlogDetail from "../pages/BlogDetail";
import CountryDetail from "../pages/CountryDetail";
import NotFound from "../pages/NotFound";
import Api from "../pages/Api";
import ApiBlogDetail from "../pages/ApiBlogDetail";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/contact',
                element : <Contact/>
            },
            {
                path : '/api',
                element : <Api/>
            },
            {
                path : '/country/:id',
                element : <CountryDetail/>
            },            
            {
                path : 'about/country/:id',
                element : <CountryDetail/>
            },
            {
                path : 'api/blog/:id',
                element : <ApiBlogDetail/>
            },
            {
                path : '*',
                element : <NotFound/>
            }
        ]
    }
])

export default router;