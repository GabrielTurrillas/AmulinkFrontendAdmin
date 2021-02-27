import React, { Fragment } from 'react';
import PacienteLista from '../../components/pacientes/PacienteLista';
import FormularioPaciente from '../../components/pacientes/FormularioPaciente';

const AgregarPacientes = () => {
    return (
        <Fragment>
            <h1 className='display-4'>Pacientes</h1>
            <p className='lead'>Ingresa un Paciente</p>
            <FormularioPaciente />
            <PacienteLista />
        </Fragment>
    );
};

export default AgregarPacientes;