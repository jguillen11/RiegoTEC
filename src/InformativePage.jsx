import { useNavigate } from "react-router";
import logo from "./imgs/riegoLogo.png";
function InformativePage() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/login");
    };
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">

            {/* --- NAVBAR --- */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                            <img src={logo} alt="RiegoTEC Logo" className="h-45 w-90" />
                        </div>

                        {/* Menú Desktop */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#inicio" className="text-slate-600 hover:text-green-600 transition-colors">Inicio</a>
                            <a href="#beneficios" className="text-slate-600 hover:text-green-600 transition-colors">Beneficios</a>
                            <a href="#contacto" className="text-slate-600 hover:text-green-600 transition-colors">Contacto</a>

                            {/* Botón Login destacado */}
                            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-green-600/20" onClick={handleHomeClick}>
                                Iniciar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION (Portada) --- */}
            <header id="inicio" className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]">
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
                    backgroundImage: "url('https://mundoagricultura.com/wp-content/uploads/2024/01/sistema-de-riego-por-goteo.webp')" // Imagen de fondo (plantas/tecnología)
                }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>

                <div className="container relative mx-auto px-4">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-bold text-5xl mb-6 leading-tight">
                                    Tus plantas, siempre cuidadas.
                                </h1>
                                <p className="mt-4 text-lg text-slate-200 mb-8">
                                    Controla la humedad, temperatura y luz de tu jardín desde cualquier lugar.
                                    RiegoTEC automatiza el cuidado para que disfrutes de la naturaleza sin preocupaciones.
                                </p>
                                <div className="flex justify-center gap-4">
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                                        Ver Demo
                                    </button>
                                    {/* <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold py-3 px-8 rounded-full transition-colors">
                                        Saber más
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- BENEFICIOS (Features) --- */}
            <section id="beneficios" className="pb-20 bg-slate-50 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">

                        {/* Feature 1 */}
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-xl p-8 transition-transform hover:-translate-y-2 duration-300">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-blue-500">
                                        <span className="text-3xl">💧</span>
                                    </div>
                                    <h6 className="text-xl font-bold text-slate-700">Ahorro de Agua</h6>
                                    <p className="mt-2 mb-4 text-slate-500 leading-relaxed">
                                        Optimiza el consumo hídrico activando el riego solo cuando la humedad del suelo es baja.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-xl p-8 transition-transform hover:-translate-y-2 duration-300">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-green-500">
                                        <span className="text-3xl">📱</span>
                                    </div>
                                    <h6 className="text-xl font-bold text-slate-700">Control Remoto</h6>
                                    <p className="mt-2 mb-4 text-slate-500 leading-relaxed">
                                        Monitorea temperatura y luz en tiempo real desde tu celular o computadora.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-xl p-8 transition-transform hover:-translate-y-2 duration-300">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-orange-400">
                                        <span className="text-3xl">⚡</span>
                                    </div>
                                    <h6 className="text-xl font-bold text-slate-700">Automatización</h6>
                                    <p className="mt-2 mb-4 text-slate-500 leading-relaxed">
                                        Configura reglas automáticas y olvídate de regar manualmente. Tu jardín se cuida solo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA FINAL / FOOTER --- */}
            <footer id="contacto" className="relative bg-slate-800 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-slate-400 font-semibold py-1">
                                Copyright © {new Date().getFullYear()} RiegoTEC System.
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-slate-400 font-semibold py-1">
                                jguillen5@ucol.mx
                            </div>
                            <div className="text-sm text-slate-400 font-semibold py-1">
                                aarredondo@ucol.mx
                            </div>
                            <div className="text-sm text-slate-400 font-semibold py-1">
                                csoto13@ucol.mx
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default InformativePage;