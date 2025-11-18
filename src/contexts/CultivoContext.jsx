import { createContext, useContext, useState } from "react";

const CultivoContext = createContext();

export function CultivoProvider({ children }) {
    const [cultivo, setCultivo] = useState(null);

    return (
        <CultivoContext.Provider value={{ cultivo, setCultivo }}>
            {children}
        </CultivoContext.Provider>
    );
}

export function useCultivo() {
    return useContext(CultivoContext);
}
