import axios from "axios";
import { useState } from "react";

export const AuthService = {
  apiUrl: "https://hezli.app/api", // Replace with your API URL

  loginUser: async (credentials) => {
    try {
      const response = await axios.post(
        `${AuthService.apiUrl}/auth/local`,
        credentials
      );
      AuthService.storeToken(response.data.jwt);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data.user;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post(
        `${AuthService.apiUrl}/auth/local/register`,
        userData
      );
      AuthService.storeToken(response.data.token);
      return response.data.user;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  logout: () => {
    AuthService.removeToken();
  },

  storeToken: (token) => {
    localStorage.setItem("token", token);
  },

  getToken: () => {
    return localStorage.getItem("token");
  },

  removeToken: () => {
    localStorage.removeItem("token");
  },

  isAuthenticated: () => {
    return AuthService.getToken() !== null;
  },
};

export default AuthService;
