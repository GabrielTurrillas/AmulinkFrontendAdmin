import React, { Fragment } from 'react';
import PacienteDetalle from './PacienteDetalle';
import FormularioTerapia from '../terapia/FormularioTerapia';

/* Containers:
    Derivacion.js
 */

const DerivacionPacientes = () => {
    return (
        <Fragment>
            <h5>Paciente</h5>
            <PacienteDetalle />
            <div className='mt-4'></div>
            <h5>Informacion de Terapia</h5>
            <FormularioTerapia />
        </Fragment>
    );
}

export default DerivacionPacientes;
