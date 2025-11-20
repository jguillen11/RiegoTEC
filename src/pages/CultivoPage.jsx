import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCultivo } from "../contexts/CultivoContext"

function CultivoPage() {
    const [cultivo, setCultivoLocal] = useState("");
    const navigate = useNavigate();

    const { setCultivo } = useCultivo(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        setCultivo(cultivo);

        navigate("/home");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#DDF4E7]">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-[#124170]">Elige el cultivo que riegas</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <select
                        value={cultivo}
                        onChange={(e) => setCultivoLocal(e.target.value)}
                        required
                        className="w-full border border-[#67C090] rounded-md p-2"
                    >
                        <option value="">Selecciona una opción </option>
                        <option value="Frijol">Frijol 🫘</option>
                        <option value="Cilantro">Cilantro 🌿</option>
                        <option value="Rábano">Rábano 🌱</option>
                        <option value="Hierbabuena">Hierbabuena 🍃</option>
                    </select>

                    <button className="w-full bg-[#67C090] text-white py-2 rounded-md hover:bg-[#26667F]">
                        Continuar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CultivoPage;
