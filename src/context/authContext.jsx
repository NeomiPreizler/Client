import { SelectActionTypes } from "@mui/base";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [firstTimeIn, setFirstTimeIn] = useState(true);

  const [token, setToken] = useState(

    localStorage.getItem("token") || null
  );

  const login = async ({ userName, email, password }) => {
    const res = await axios.post(
      "http://localhost:3600/api/auth/login",
      { userName, email, password },
      // {
      //   withCredentials: true,
      // }
    );
    setCurrentUser(res.data.user);
    setToken(res.data.accessToken);

  };
  const logout = () => {

    setCurrentUser(null);
    setToken(null);
    navigate('/')

  };
  const signedIn = () => {
    setFirstTimeIn(false);
  }
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (

    <AuthContext.Provider value={{ currentUser, token, firstTimeIn, login, logout, signedIn }}>
      {children}
    </AuthContext.Provider>

  )
};
