import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LayOut from './components/Routes/LayOut/LayOut'
import Home from './components/Routes/Home/Home'
import CustomerChart from './components/Routes/CustomerChart/CustomerChart'

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <LayOut/>, children: [
      {index: true, element: <Home/>},
      {path: "customerChart/:id", element: <CustomerChart/>},
    ]}
  ])
  return <RouterProvider router={router} />
}

export default App
