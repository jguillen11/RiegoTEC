import React, { useState } from 'react';
import TypesExample from './TypesExample';

function ToggleRiego() {
    const [isRiegoActive, setIsRiegoActive] = useState(false);

    const handleToggle = () => {
        
        setIsRiegoActive(prev => !prev);
    };

    const text = isRiegoActive ? 'Desactivar Riego' : 'Activar Riego';
    const bgColor = isRiegoActive ? 'bg-zinc-600' : 'bg-emerald-600';
    const shadowColor = isRiegoActive ? 'shadow-zinc-700/50' : 'shadow-emerald-700/50';

    return (
        <TypesExample 
            text={text} 
            bgColor={bgColor} 
            shadowColor={shadowColor}
            onClick={handleToggle}
        />
    );
}

export default ToggleRiego;