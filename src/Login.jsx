import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario:", user);
    console.log("Contraseña:", password);
    // Aquí podrías agregar tu lógica de autenticación
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#DDF4E7]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border border-[#67C090]">
        <h1 className="text-3xl font-bold text-center text-[#124170] mb-6">
          Riegotec
        </h1>
        <p className="text-center text-[#26667F] mb-8">
          Sistema de control de riego inteligente
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#124170] mb-1 text-sm">Usuario</label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
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
        </form>
      </div>
    </div>
  );
}

export default Login;
