import React from 'react';
import { Fragment } from 'react';
import SesionDetalle from '../../components/terapia/SesionDetalle';

const FichaSesion = () => {       
    return (
        <Fragment>
            <div style={{width: '55rem', fontSize: 'x-large'}}>
                    <h3 className='display-4 ml-4'>Ficha de Sesion</h3>
                    <SesionDetalle />
            </div>
        </Fragment>
    );
}

export default FichaSesion;
