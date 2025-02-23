import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/pages/login/Login.tsx'
import Layout from '@/pages/dashboard/Layout'
import { Provider } from 'react-redux'
import { store } from '@/lib/store/store'
import KPA from '@/pages/dashboard/kpa/KPA'
import Browse from './pages/dashboard/browse/Browse'
import MyProjects from './pages/dashboard/myProjects/MyProjects'
import TaskManagement from './pages/dashboard/taskManagement/TaskManagement'
import Inbox from './pages/dashboard/inbox/Inbox'
import SignUp from './pages/signup/signup'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} />
  },
  {
    path: "/login",
    element: <Login />,
    index: true
  },{
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <KPA />
      },
      {
        path: "browse",
        element: <Browse />
      },
      {
        path: "my-projects",
        element: <MyProjects />
      },
      {
        path: "tasks",
        element: <TaskManagement />
      },
      {
        path: "inbox",
        element: <Inbox />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
)
