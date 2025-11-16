import Header from './Header';
import Cards from '../components/Cards';
import DatosGenerales from './DatosGenerales';
import TypesExample from './TypesExample';
import ThermometerChart from './ThermometerChart';
import ToggleRiego from './ToggleRiego';

function AutoLayoutExample() {
    return (
        <>
            <Header />
            <main className='max-w-7xl mx-auto px-4 py-3 md:px-6'>
                
                <div className="text-center mb-3">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4"> 
                        <ToggleRiego /> 
                        <TypesExample text='Actualizar información' />
                        <TypesExample text='Reiniciar' />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
                    <div>
                        <Cards header='Datos de humedad' />
                    </div> 

                    <div>
                        <ThermometerChart />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <Cards header='Datos de luz' /> 
                    </div>
                    
                    <div>
                        <DatosGenerales />
                    </div>
                </div>
            </main>
        </>
    );
}

export default AutoLayoutExample;