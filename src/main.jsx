import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css';
import "./index.css"

import App from './App'

import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import NotFound from "./pages/NotFound.jsx";
import ContactForm from './pages/ContactForm.jsx';
import Projetos from './pages/Projetos.jsx';

const router = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/projetos", element: <Projetos /> },
      { path: "/contato", element: <ContactForm /> },
      {path:"*",
        element: <NotFound />
      }
    ]
  }]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)