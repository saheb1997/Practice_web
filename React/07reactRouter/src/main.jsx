import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDoM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
import { useLoaderData } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children:[
//       {path:"",
//         element:<Home/>
//       },
//       {path:"about",
//         element:<About/>
//       },
//       {
//         path:"Contact",
//         element: <Contact/>
//       }
      
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route loader={githubInfoLoader} path="github" element={<Github/>}/>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

