import React from "react"
import { Navigate } from "react-router-dom"
const Home = React.lazy(() => import("../views/home"))
const Entire = React.lazy(() => import("../views/entire"))
const Detail = React.lazy(() => import("../views/detail"))

const routes = [
  {
    path: "/",
    // react router v6 component属性使用element替代、redirect组件使用Navigate组件替代
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/entire",
    element: <Entire/>
  },
  {
    path: "/detail",
    element: <Detail/>
  }
]

export default routes
