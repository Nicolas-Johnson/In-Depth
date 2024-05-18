import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './sass/styles.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Blog from './Pages/Blog.jsx'
import Home from './Pages/Home.jsx'
import Works from './Pages/Works.jsx'
import Contact from './Pages/Contact.jsx'
import Error from './Pages/Error.jsx'
import BlogPost from './components/BlogPost.jsx'
import WorkSingle from './components/WorkSingle.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/services', element: <Services />},
      {path: '/blog', element: <Blog />},
      {path: '/blog/:postId', element: <BlogPost />},
      {path: '/works', element: <Works />},
      {path: '/works/:workId', element: <WorkSingle />},
      {path: '/contact', element: <Contact />},
      
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
