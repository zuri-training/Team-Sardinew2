import axios from "axios";
// caling endpoint
// const API_URL = "http://localhost:5000/user/";
const API_URL = "https://feedback-api-rmi2.onrender.com/user/";
// const API_URL = "https://feedback-api-fi7m.onrender.com/user/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login user function
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.date));
  }
  return response.data;
};
//logout user
const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  logout,
  login,
};

export default authService;
