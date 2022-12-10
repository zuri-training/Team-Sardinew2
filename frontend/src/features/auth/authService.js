import axios from "axios";
// caling endpoint
const API_URL = "http://localhost:5000/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("userLocal", JSON.stringify(response.data));
  }
  return response.data;
};

//login user function
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("userLocal", JSON.stringify(response.date));
  }
  return response.data;
};
//logout user
const logout = () => localStorage.removeItem("userLocal");

const authService = {
  register,
  logout,
  login,
};

export default authService;
