import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getListSesion } from '../../redux/actions/terapiaActions';
/* Containers:
    PacienteDashBoard.js
*/
const SesionLista = () => {
    const dispatch = useDispatch();
    const { id:idPaciente } = useParams();
    const sesiones = useSelector(state => state.terapiaReducer.sesiones)

    useEffect(() => {
        dispatch(getListSesion(idPaciente));
    }, [dispatch, idPaciente]);
    
    if (!sesiones || !sesiones.length) {
        return (
            <p>Spiner</p>
        ) 
    }

    return (
       <Fragment>
            <div className='card mr-4 mb-4'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Fecha Sesion</th>
                            <th scope="col">Asistencia</th>
                            <th scope="col">Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sesiones.map(({ id, asistio, fechaSesion, pago }) => {
                                const fechaSesionDate = new Date(fechaSesion);
                                var pagoString
                                if(pago) {
                                    pagoString = 'Pago Realizado'
                                } else {
                                    pagoString = 'No a Pagado'
                                }
                                var asistioString
                                if(asistio) {
                                    asistioString = 'Asistio'
                                } else {
                                    asistioString = 'No Asistio'
                                }
                                return(
                                    <tr key={id} className='clickable-row'>
                                        <th scope="row">{id}</th>
                                        <td><Link to={"/pacientes/ficha_sesion/"+id}>{fechaSesionDate.getDate()}/{fechaSesionDate.getMonth()+1}/{fechaSesionDate.getFullYear()}</Link></td>
                                        <td><Link to={"/pacientes/ficha_sesion/"+id}>{asistioString}</Link></td>
                                        <td><Link to={"/pacientes/ficha_sesion/"+id}>{pagoString}</Link></td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </table>
            </div>
        </Fragment>
    ) 
}

export default SesionLista;