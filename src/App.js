import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Instruction from "./pages/Instruction/Instruction";
import Promotion from "./pages/Promotion/Promotion";
import './App.scss';


const Layout=()=>{
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Products/:id",
        element:<Products/>
      },
      {
        path:"/Product/:id",
        element:<Product/>
      },
      {
        path: "/Instruction", // New route for the Instruction page
        element: <Instruction />
      },
      {
        path: "/Promotion", // New route for the Instruction page
        element: <Promotion />
      }

    ]


  },

]);




function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
