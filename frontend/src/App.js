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
import CreateForm from "./component/CreateForm";
import Template from "./component/Template";
import Test from "./pages/Test";
import Form from "./component/Form";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/form/:id" element={<CreateForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="test" element={<Test />} />
        <Route path="form" element={<Form />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
