import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRetrievePaciente } from '../../redux/actions/pacientesActions';
import SesionLista from '../../components/terapia/SesionLista';
import { Link } from 'react-router-dom';

const PacienteDashBoard = (props) => {
    const idPaciente = props.match.params.id
    const paciente = useSelector(state => state.pacientesReducer.pacienteDetalle)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRetrievePaciente(idPaciente))
    },[idPaciente, dispatch]);
    return (
    <Fragment>
        <div className='row'>
            <div className='col'>
                <h3 className='display-4 ml-4'>Sesiones</h3>
                <p className='lead ml-4'>Lista de Sesiones</p>
            </div>
            <div className='col mt-4'>
                <p className='lead ml-4 float-right d-flex'>{paciente.nombre} {paciente.apellidoPaterno}</p>
            </div>
        </div>
        <SesionLista />
        <Link className='btn btn-outline-primary ml-4' to={'ficha_paciente/'+idPaciente} >Ver Ficha del Paciente</Link>
    </Fragment>
    );
}
    
export default PacienteDashBoard;