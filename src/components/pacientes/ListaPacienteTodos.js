import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListPaciente } from '../../redux/actions/pacientesActions';
import { getListTerapia } from '../../redux/actions/terapiaActions';
import { getListPerfilTerapeuta } from '../../redux/actions/terapeutaActions';

/* Containers:
    AgregarPacientes.js
    Home.js
    */
const PacienteListaTodos = () => {
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
            <div className='card mt-4 container-fluid'>
                <div className='row'>
                    <table className="table table-hover">
                        <thead>
                            <tr className='d-flex'>
                                <th className="col-1">Id</th>
                                <th className="col-2">Nombre</th>
                                <th className="col-2">Profecional</th>
                                <th className="col-2">Prevision o Programa</th>
                                <th className="col-2">Telefono</th>
                                <th className="col-2">Pago Derivacion</th>
                                <th className="col-1">Derivar</th>
                            </tr>
                        </thead>
                        <tbody>
                        <ul className='list-group mb-4'>
                            {pacientes.map(({ id, nombre, apellidoPaterno, telefono, prevision, pagoDerivacion }) =>
                                <tr key={id} className='clickable-row d-flex'>
                                <th className='col-1' scope="row">{id}</th>
                                <td className='col-2'><Link to={"pacientes/"+id}>{nombre} {apellidoPaterno}</Link></td>
                                <td className='col-2'><Link to={"pacientes/"+id}>{terapeutaDePaciente(terapias, id, terapeutas)}</Link></td>
                                <td className='col-2'><Link to={"pacientes/"+id}>{prevision}</Link></td>
                                <td className='col-2'><Link to={"pacientes/"+id}>{telefono}</Link></td>
                                <td className='col-2'><Link to={"pacientes/"+id}>{pagoDerivacion ? 'Si' : 'No'}</Link></td>
                                <td className='col-1'><Link className='btn btn-primary btn-sm' to={'/derivacion/'+id} role='button'>Derivar</Link></td>
                                </tr>
                            )}
                        </ul>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    ); 
};

export default PacienteListaTodos;
