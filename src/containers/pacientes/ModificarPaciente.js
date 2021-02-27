import React, { Fragment } from 'react';
import FormularioModificarPaciente from '../../components/pacientes/FormularioModificarPaciente';


const ModificarPaciente = () => {
    return (
        <Fragment>
            <h3 className='display-4 mb-4'>Ficha del Paciente</h3>
            <FormularioModificarPaciente/>            
        </Fragment>
    );
}

export default ModificarPaciente;
