import React,{ Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPacienteDetalle } from '../../redux/actions/pacientesActions';
import { fetchTerapia } from '../../redux/actions/terapiaActions';
/* Containers:
    FichaPaciente.js
*/
const PacienteDetalle = () => {
    const { id:idPaciente } = useParams();
    const dispatch = useDispatch();
    const paciente = useSelector(state => state.pacientesReducer.pacienteDetalle)
    const terapia = useSelector(state => state.terapiaReducer.terapia);
    console.log('paciente:',paciente);
    console.log('terapia:',terapia);

    useEffect(() => {
        dispatch(fetchPacienteDetalle(idPaciente));
    },[dispatch, idPaciente]);

    useEffect(() => {
        dispatch(fetchTerapia(idPaciente));
    },[dispatch, idPaciente]);

    
    const { rut, nombre, apellidoPaterno, apellidoMaterno,
        telefono, email, fechaNacimiento, genero, direccion,
        comunaResidencia, ocupacionProfecion, prevision } = paciente
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
                    <p className='font-weight-light'>Ocupacion o Profecion: { ocupacionProfecion }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Tipo de Terapia: { prevision }</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Motivo de Consulta: { terapia.motivoConsulta }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Captacion: { terapia.captacion }</p>
                </div>
            </div>
        </Fragment>
    );
}

export default PacienteDetalle;
