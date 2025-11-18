import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../DB/FBConect";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); 

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(result.user, {
                displayName: displayName 
                
            });

            console.log("Usuario registrado y perfil actualizado:", result.user);

            navigate("/home"); 
        } catch (err) {
            console.error("Error al registrarse:", err);
            let errorMessage = "Error al registrarse. Inténtalo de nuevo.";
            if (err.code === 'auth/email-already-in-use') {
                errorMessage = "Este correo ya está registrado.";
            } else if (err.code === 'auth/weak-password') {
                errorMessage = "La contraseña debe tener al menos 6 caracteres.";
            } else {
                errorMessage = err.message;
            }
            setError(errorMessage);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#DDF4E7]">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border border-[#67C090]">
                <h1 className="text-3xl font-bold text-center text-[#124170] mb-6">
                    RiegoTEC
                </h1>
                <p className="text-center text-[#26667F] mb-8">
                    Crear una nueva cuenta
                </p>

                {error && (
                    <p className="text-red-600 text-center mb-4 text-sm">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-[#124170] mb-1 text-sm">Nombre de usuario</label>
                        <input
                            type="text"
                            placeholder="Usuario"
                            value={displayName} 
                            onChange={(e) => setDisplayName(e.target.value)} 
                            required
                            className="w-full px-4 py-2 border border-[#67C090] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26667F] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-[#124170] mb-1 text-sm">Correo</label>
                        <input
                            type="email"
                            placeholder="ejemplo@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-[#67C090] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26667F] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-[#124170] mb-1 text-sm">Contraseña</label>
                        <input
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-[#67C090] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26667F] focus:border-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#67C090] text-white font-semibold py-2 rounded-md hover:bg-[#26667F] transition"
                    >
                        Registrarse
                    </button>

                    <p className="text-center text-sm text-[#26667F] mt-4">
                        ¿Ya tienes una cuenta?{" "}
                        <a href="/login" className="text-[#124170] font-semibold hover:underline">
                            Inicia sesión
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;