import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../DB/FBConect";
import logo from '../imgs/riegoLogo.png';
import { useAuth } from "../contexts/AuthContext";

function Header({ esDeDia, ultimaActualizacion }) {
    const { user } = useAuth();

    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target) && openMenu) {
                setOpenMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    const toggleMenu = () => {
        setOpenMenu(prev => !prev);
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

    if (!user) {
        return (
            <header className="bg-emerald-600 text-white shadow h-20">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-full object-contain cursor-pointer scale-300 origin-left"
                        onClick={() => navigate('/home')}
                    />
                </div>
            </header>
        );
    }

    const userName = user.displayName || user.email;

    return (
        <header className="bg-emerald-600 text-white shadow h-20">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <img
                    src={logo}
                    alt="logo"
                    className="h-full object-contain cursor-pointer scale-300 origin-left"
                    onClick={() => navigate('/home')}
                />

                <div>
                    <p>Última actualización: {ultimaActualizacion}</p>
                    <p>Es de día: {esDeDia ? 'Sí' : 'No'}</p>
                </div>

                <div className="relative" ref={menuRef}>

                    <div
                        className="flex items-center gap-3 cursor-pointer select-none"
                        onClick={toggleMenu}
                    >
                        {user.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="perfil"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-emerald-300 flex items-center justify-center text-emerald-900 font-bold">
                                {userName[0].toUpperCase()}
                            </div>
                        )}

                        <span className="font-medium">
                            {userName}
                        </span>
                    </div>

                    {openMenu && (
                        <div className="
                            absolute 
                            right-0 
                            mt-2 
                            w-48 
                            bg-white 
                            rounded-md 
                            shadow-xl 
                            py-1 
                            z-10
                        ">
                            <div className="
                                px-4 py-2 
                                text-sm 
                                text-gray-700 
                                border-b 
                                border-gray-100
                                truncate
                            ">
                                {user.email}
                            </div>

                            <button
                                onClick={handleLogout}
                                className="
                                    block 
                                    w-full 
                                    text-left 
                                    px-4 py-2 
                                    text-sm 
                                    text-red-600 
                                    hover:bg-red-50 
                                    hover:text-red-700
                                "
                            >
                                Cerrar sesión
                            </button>

                            <div className="
                                px-4 py-2 
                                text-sm 
                                text-gray-700 
                                border-b 
                                border-gray-100
                                truncate
                                hover:bg-zinc-100 
                                hover:text-zinc-700
                            ">
                                <a href="">Configuración de riego</a>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;