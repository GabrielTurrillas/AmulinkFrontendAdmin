import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRetrieveSesion } from '../../redux/actions/terapiaActions';
/* Containers: 
    FichaSesion.js
*/
const SesionDetalle = () => {
    const { id:idSesion } = useParams()
    const dispatch = useDispatch();
    const sesion = useSelector(state => state.terapiaReducer.sesion)

    useEffect(()=>{
        dispatch(getRetrieveSesion(idSesion));
    }, [dispatch, idSesion])
    
    const { pago, asistio, fechaSesion, modalidad, notasSesion, fechaPago } = sesion
    const fechaSesionDate = new Date(fechaSesion)
    const fechaPagoDate = new Date(fechaPago)


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
                    <p className='font-weight-light'>Pago: {pago ? 'Si' : 'No'}</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Fecha de Pago: {fechaPagoDate.getDate()}/{fechaPagoDate.getMonth()+1}/{fechaPagoDate.getFullYear()}</p>
                </div>
            </div>
            <div className='row ml-3 mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Asistencia: {asistio ? 'Si' : 'No'}</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Notas de la Sesion: {notasSesion}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default SesionDetalle;
