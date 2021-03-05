import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListPaciente } from '../../redux/actions/pacientesActions';
import { getListTerapia } from '../../redux/actions/terapiaActions';
import { getListPerfilTerapeuta } from '../../redux/actions/terapeutaActions';
import { Link } from 'react-router-dom';
/* Containers:
    AgregarPacientes.js
    Home.js
    */
const PacienteLista = () => {
    const dispatch = useDispatch();
    const pacientes = useSelector(state => state.pacientesReducer.pacientes)
    const terapias = useSelector(state => state.terapiaReducer.terapias)
    const terapeutas = useSelector(state => state.terapeutaReducer.perfiles)

    useEffect(() => {
        dispatch(getListPaciente());
        dispatch(getListTerapia());
        dispatch(getListPerfilTerapeuta());
    }, [dispatch]);
    
    if (!pacientes || !pacientes.length || !terapias || !terapias.length || !terapeutas || !terapeutas.length) {
        return (
            <p>
                Spiner
            </p>
        ) 
    };
        
    const terapeutaDePaciente = (terapias, idPaciente, terapeutas) => {
        const terapia = terapias.find(terapia => terapia.paciente === idPaciente)
        if (!terapia) {
            return 'No Derivado'
        }
        const terapeuta = terapeutas.find(terapeuta => terapeuta.id === terapia.userAccount)
        if (!terapeuta){
            return 'undefined'
        }
        const nombreTerapeuta = terapeuta.nombre + " " + terapeuta.apellidoPaterno
        return nombreTerapeuta
    }    

    return (
        <Fragment>
            <div className='card mt-4'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Profecional</th>
                            <th scope="col">Prevision/Programa</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Derivar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map(({ id, nombre, apellidoPaterno, telefono, prevision }) =>
                            <tr key={id} className='clickable-row'>
                                <th scope="row">{id}</th>
                                <td><Link to={"pacientes/"+id}>{nombre} {apellidoPaterno}</Link></td>
                                <td><Link to={"pacientes/"+id}>{terapeutaDePaciente(terapias, id, terapeutas)}</Link></td>
                                <td><Link to={"pacientes/"+id}>{prevision}</Link></td>
                                <td><Link to={"pacientes/"+id}>{telefono}</Link></td>
                                <td><Link className='btn btn-primary btn-sm' to={'/derivacion/'+id} role='button'>Derivar</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Fragment>
    ) 
}

export default PacienteLista;
