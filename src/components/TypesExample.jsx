function TypesExample({ 
    text = 'Botón', 
    bgColor = 'bg-emerald-600', 
    shadowColor = 'shadow-emerald-700/50', 
    onClick 
}) {

    
    return (
        <button
            onClick={onClick} 
            className={`
                ${bgColor} 
                text-white 
                px-5 
                py-2 
                rounded-xl
                hover:opacity-90 
                hover:scale-[1.02]
                cursor-pointer
                transition 
                duration-300 
                ease-in-out
                font-semibold
                shadow-lg
                ${shadowColor} 
                focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-50
            `}
        >
            {text}
        </button>
    );
}

export default TypesExample;