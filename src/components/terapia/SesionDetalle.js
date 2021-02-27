import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSesion } from '../../redux/actions/terapiaActions';
/* Containers: 
    FichaSesion.js
*/
const SesionDetalle = () => {
    const { id:idSesion } = useParams()
    const dispatch = useDispatch();
    const sesion = useSelector(state => state.terapiaReducer.sesion)

    useEffect(()=>{
        dispatch(fetchSesion(idSesion));
    }, [dispatch, idSesion])
    
    const { pago, asistio, fechaSesion, modalidad, notasSesion, fechaPago } = sesion
    const fechaSesionDate = new Date(fechaSesion)
    const fechaPagoDate = new Date(fechaPago)

    var pagoString
    if(pago){
        pagoString = 'Pago Realizado'
    } else {
        pagoString = 'No a Pagado'
    }
    var asistioString
    if(asistio){
        asistioString = 'Asistio'
    } else {
        asistioString = 'No Asistio'
    }

    return (
        <Fragment>
            <div className='row ml-3 mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Fecha de la Sesion: {fechaSesionDate.getDate()}/{fechaSesionDate.getMonth()+1}/{fechaSesionDate.getFullYear()}</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Modalidad: {modalidad}</p>
                </div>
            </div>
            <div className='row ml-3 mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Notas de la Sesion: {notasSesion}</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Fecha de Pago: {fechaPagoDate.getDate()}/{fechaPagoDate.getMonth()+1}/{fechaPagoDate.getFullYear()}</p>
                </div>
            </div>
            <div className='row ml-3 mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Pago: {pagoString}</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Asistencia: {asistioString}</p>
                </div>
            </div>
            <div className='row ml-3 mt-3'>
                <button className='mb-3 btn btn-primary mt-4'>Modificar</button>
            </div>
        </Fragment>
    );
}

export default SesionDetalle;
