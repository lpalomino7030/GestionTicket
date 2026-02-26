import { createContext, useState, useEffect } from "react";
import axiosClient from "../api/client";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await axiosClient.post("/auth/login", {
      email,
      password,
    });

    const token = response.data.token;
    localStorage.setItem("token", token);

    await fetchUser(); 
  };

  const fetchUser = async () => {
    try {
      const response = await axiosClient.get("/users/me");
      setUser(response.data);
    } catch (error) {
      console.error("Error obteniendo usuario", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};