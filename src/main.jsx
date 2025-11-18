import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CultivoProvider } from "./contexts/CultivoContext";
import React from 'react'; 
import { createRoot } from 'react-dom/client';
import App from "./App";
import './index.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <CultivoProvider>
        <App />
      </CultivoProvider>
    </AuthProvider>
  </BrowserRouter>
);
