import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Hello from './pages/Hello.jsx';
import About from './pages/About.jsx';
import Skill from './pages/Skill.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Hello />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"skill",
        element:<Skill />
      },
      {
        path:"project",
        element:<Project />
      },
      {
        path:"contact",
        element:<Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
