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
<<<<<<< HEAD
import CreateForm from "./component/CreateForm";
import Template from "./component/Template";
import Test from "./pages/Test";
import Form from "./component/Form";
=======
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifiedPassword from "./pages/Verified-password";
>>>>>>> xfred

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
<<<<<<< HEAD
        <Route path="/form/:id" element={<CreateForm />} />
=======
>>>>>>> xfred
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:userId/:token" element={<ResetPassword />} />
        <Route path="/verified-password" element={<VerifiedPassword />} />

        <Route path="*" element={<NotFound />} />
        <Route path="test" element={<Test />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
