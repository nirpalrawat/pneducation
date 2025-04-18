import React from 'react'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import HeroSection from './pages/student/HeroSection'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { Router } from 'lucide-react'
import { RouterProvider } from 'react-router'
import Courses from './pages/student/Courses'
const appRouter = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (<> 
        <HeroSection />
        <Courses/>
        </>)
      },
      {
        path: 'login',
        element: <Login />,
      }
    ]
  }
])



function App() {
  return (
    <>
      <RouterProvider router={appRouter} />


    </>
  )
}

export default App
