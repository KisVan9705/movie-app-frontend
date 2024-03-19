import { useState } from "react";
import Registration from "./components/registration";
import Login from "./components/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
// import "./index.css";
import { isAuthenticated } from "./utils/authentication";
import Search from "./components/search";

function App() {
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to='/login' />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute element={<Home />} />} />
        <Route
          path='/search'
          element={<ProtectedRoute element={<Search />} />}
        />
        <Route
          path='/login'
          element={isAuthenticated() ? <Navigate to='/' /> : <Login />}
        />
        <Route
          path='/registration'
          element={isAuthenticated() ? <Navigate to='/' /> : <Registration />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
