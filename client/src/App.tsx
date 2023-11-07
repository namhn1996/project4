import { useState, useEffect } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./page/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import Baohanh from "./page/Baohanh";
import Tuyendung from "./page/Tuyendung";
import Lienhe from "./page/Lienhe";
import Gioithieu from "./page/Gioithieu";
import Chitiet from "./page/Chitiet";
import Giohang from "./page/Giohang";
import Login from "./page/Login";
import Register from "./page/Register";
import Upload_Multiple from "./component/Upload_Multiple";
import Lichsu from "./page/Lichsu";
import AdminLogin from "./page/admin/AdminLogin";
import Admin from "./page/admin/Admin";
import Tintuc from "./page/Tintuc";

function App() {
  function PrivateRoute({ isAuthenticated, children }: any) {
    if (!isAuthenticated) {
      return <Navigate to="/admin/login" replace />;
    }
    return children;
  }
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const adminValue = localStorage.getItem("admin");
    const adminUser = adminValue !== null ? JSON.parse(adminValue) : null;
    if (adminUser) {
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
  window.scrollTo({top : 0, behavior: 'smooth'})
  },[])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/baohanh" element={<Baohanh />} />
        <Route path="/tuyendung" element={<Tuyendung />} />
        <Route path="/tintuc" element={<Tintuc />} />
        <Route path="/lienhe" element={<Lienhe />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route path="/detail/:id" element={<Chitiet />} />
        <Route path="/cart" element={<Giohang />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Lichsu />} />
        <Route path="/from" element={<Upload_Multiple />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute isAuthenticated={isLogin}>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
