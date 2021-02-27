import React from 'react';
import SesionDetalle from '../../components/terapia/SesionDetalle';

const FichaSesion = () => {       
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5' style={{width: '55rem', fontSize: 'x-large'}}>
                <h3 className='display-4 ml-4'>Ficha de Sesion</h3>
                <SesionDetalle />
            </div>
        </div>
    );
}

export default FichaSesion;
