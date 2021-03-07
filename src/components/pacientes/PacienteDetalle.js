import React,{ Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRetrievePaciente } from '../../redux/actions/pacientesActions';
/* Containers:
    FichaPaciente.js
*/
const PacienteDetalle = () => {
    const { id:idPaciente } = useParams();
    const dispatch = useDispatch();
    const paciente = useSelector(state => state.pacientesReducer.pacienteDetalle)

    useEffect(() => {
        dispatch(getRetrievePaciente(idPaciente));
    },[dispatch, idPaciente]);
    
    const { rut, nombre, apellidoPaterno, apellidoMaterno,
        telefono, email, fechaNacimiento, genero, direccion,
        comunaResidencia, prevision, captacion, motivoConsulta, pagoDerivacion } = paciente
    const fechaNacimientoDate = new Date(fechaNacimiento); 

    return (
        <Fragment>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Rut: { rut }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Nombre: { nombre }</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Apellido paterno: { apellidoPaterno }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Apelldio materno: { apellidoMaterno }</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Telefono: { telefono }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Email: { email }</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Genero: { genero }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Direccion: { direccion }</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Comuna de Residencia: { comunaResidencia }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Fecha de Nacimiento: { fechaNacimientoDate.getDate() }/{ fechaNacimientoDate.getMonth()+1}/{ fechaNacimientoDate.getFullYear() }</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Tipo de Terapia: { prevision }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Captacion: { captacion }</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Motivo de Consulta: { motivoConsulta }</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Pago de Derivacion: { pagoDerivacion ? 'Si' : 'No' }</p>
                </div>
            </div>
        </Fragment>
    );
}

export default PacienteDetalle;
