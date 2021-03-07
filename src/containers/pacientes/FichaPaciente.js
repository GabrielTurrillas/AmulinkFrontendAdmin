import React,{ Fragment } from 'react';
import PacienteDetalle from '../../components/pacientes/PacienteDetalle';
import { Link, useParams } from 'react-router-dom';

const FichaPaciente = () => {
    const { id:idPaciente } = useParams()
    return (
        <Fragment>
            <h1 className='display-4 mb-4'>Ficha del Paciente</h1>
            <PacienteDetalle />
            <div className='mt-3' />
            <Link className='mb-3 btn btn-primary mt-4' to={`/pacientes/modificar_paciente/${idPaciente}`}>Modificar</Link>
        </Fragment>
    );
};

export default FichaPaciente; 