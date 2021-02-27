import React, { Fragment } from 'react';
import SesionLista from '../../components/terapia/SesionLista';
import { Link } from 'react-router-dom';

const PacienteDashBoard = (props) => {
    const idPaciente = props.match.params.id
    return (
        <Fragment>
            <h3 className='display-4 ml-4'>Sesiones</h3>
            <p className='lead ml-4'>Lista de Sesiones</p>
            <SesionLista />
            <Link className='btn btn-outline-primary ml-4' to={'ficha_paciente/'+idPaciente} >Ver Ficha del Paciente</Link>
        </Fragment>
    );
}
    
export default PacienteDashBoard;