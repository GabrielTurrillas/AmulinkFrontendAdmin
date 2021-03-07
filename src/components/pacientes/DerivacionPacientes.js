import React, { Fragment } from 'react';
import PacienteDetalle from './PacienteDetalle';
import FormularioTerapia from '../terapia/FormularioTerapia';

/* Containers:
    Derivacion.js
 */

const DerivacionPacientes = () => {
    return (
        <Fragment>
            <h1 className='display-4 mb-4'>Derivacion de Paciente</h1>
            <PacienteDetalle />
            <FormularioTerapia />
        </Fragment>
    );
}

export default DerivacionPacientes;
