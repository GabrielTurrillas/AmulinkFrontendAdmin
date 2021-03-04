import React, { Fragment } from 'react';
import FormularioPaciente from '../../components/pacientes/FormularioPaciente';

const AgregarPacienteContainer = () => {
    return (
        <Fragment>
            <div className='row'>
                <div className='col'>
                    <h1 className='display-4'>Ingresa un Paciente</h1>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col'>
                    <FormularioPaciente />
                </div>
            </div>
        </Fragment>
    );
};

export default AgregarPacienteContainer;