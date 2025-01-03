import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import routes from "./routes/paths.jsx";
import { Typography } from "@material-tailwind/react";



function App() {
 
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes
  }])
  return (
    <>
    
      <RouterProvider router={router}/>

    </>
  )
}

export default App
