import React, { Fragment } from 'react';
import PacienteLista from '../../components/pacientes/PacienteLista';
import { Link } from 'react-router-dom';

const PacienteListaContainer = () => {
    return (
        <Fragment>
            <div className='row'>
                <div className='col'>
                    <h1 className='display-4'>Pacientes</h1>
                </div>
                <div className='col'>
                    <Link className='btn btn-success float-right mr-4 mt-4' to='/AgregarPacientes' role='button'>Ingresar Paciente</Link>
                </div>
            </div>
            <PacienteLista />
        </Fragment>
    );
};

export default PacienteListaContainer;