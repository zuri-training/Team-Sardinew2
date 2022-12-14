import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
import NotFound from "./pages/Not-found";
import Dashboard from "./pages/Dashboard";

import Test from "./pages/Test";
import Form from "./component/Form";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifiedPassword from "./pages/Verified-password";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/resetPassword/:userId/:token"
          element={<ResetPassword />}
        />
        <Route path="/verified-password" element={<VerifiedPassword />} />
        <Route path="/form/:id" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
