import { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import NavigationBar from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import RegisterUser from "./pages/RegisterUser";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="App">
          <NavigationBar />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/RegisterUser" element={<RegisterUser />} />
              <Route path="/AddProduct" element={<AddProduct />} />
            </Routes>
          </div>
        </div>
      </Router>
      
     
    </Fragment>
  );
}

export default App;
