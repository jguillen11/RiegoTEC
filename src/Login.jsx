import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../DB/FBConect";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario logueado:", result.user);

      navigate("/home");
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      
    
      setError("Error: Correo electrónico o contraseña incorrectos."); 
    }
  };

  const handleGoogleLogin = async () => {
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      console.log("Usuario con Google:", result.user);

      navigate("/home");
    } catch (err) {
      console.error("Error al iniciar con Google:", err);
      setError("Error al iniciar sesión con Google. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#DDF4E7]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border border-[#67C090]">
        <h1 className="text-3xl font-bold text-center text-[#124170] mb-6">
          RiegoTEC
        </h1>
        <p className="text-center text-[#26667F] mb-8">
          Sistema de control de riego inteligente
        </p>

        {error && (
          <div 
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4 text-sm font-medium"
            role="alert"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#124170] mb-1 text-sm">Correo</label>
            <input
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#67C090] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26667F] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-[#124170] mb-1 text-sm">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-[#67C090] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26667F] focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#67C090] text-white font-semibold py-2 rounded-md hover:bg-[#26667F] transition"
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full mt-3 bg-white border border-[#67C090] text-[#124170] py-2 rounded-md hover:bg-[#DDF4E7] transition font-semibold"
          >
            Iniciar sesión con Google
          </button>

          <p className="text-center text-sm text-[#26667F] mt-4">
            ¿Aun no tienes cuenta?{" "}
            <a
              href="/signup"
              className="text-[#124170] font-semibold hover:underline"
            >
              Registrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
