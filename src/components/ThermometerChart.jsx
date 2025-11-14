function ThermometerChart() {
    const value = 45; 
    const clampedValue = Math.min(Math.max(value, 0), 100);

    const toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    };

    const fahrenheitValue = toFahrenheit(clampedValue).toFixed(1);

    const getFillColor = (val) => {
        if (val > 70) return 'rgb(220, 38, 38)'; 
        if (val > 40) return 'rgb(245, 158, 11)'; 
        return 'rgb(14, 165, 233)'; 
    };

    const fillColor = getFillColor(clampedValue);
    
    const fillWidth = `${clampedValue}%`;

    return (
        <div className="flex flex-col h-full p-1">
            <div className="bg-white shadow-xl rounded-xl h-full flex flex-col transition-all duration-300">
                
                <header className="p-2 border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 text-center">
                        Datos de Temperatura
                    </h2>
                </header>

                <div className="flex-grow flex flex-col justify-center items-center p-1">
                    
                    <p className="font-extrabold text-7xl mb-1" style={{ color: fillColor }}>
                        {clampedValue}°C
                    </p>

                    <p className="text-2xl text-gray-500 mb-8">
                        {fahrenheitValue}°F
                    </p>

                    <div className="w-full max-w-sm h-5 bg-gray-200 rounded-full overflow-hidden">
                        
                        <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                                width: fillWidth,
                                backgroundColor: fillColor,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThermometerChart;