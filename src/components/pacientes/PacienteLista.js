import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListPaciente } from '../../redux/actions/pacientesActions';
import { getListTerapia } from '../../redux/actions/terapiaActions';
import { getListPerfilTerapeuta } from '../../redux/actions/terapeutaActions';
import Pacientes from './Pacientes';
import Pagination from './Pagination';

/* Containers:
    AgregarPacientes.js
    Home.js
    */
const PacienteLista = () => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pacientesPerPage] = useState(15);
    const dispatch = useDispatch();
    const pacientes = useSelector(state => state.pacientesReducer.pacientes)
    const terapias = useSelector(state => state.terapiaReducer.terapias)
    const terapeutas = useSelector(state => state.terapeutaReducer.perfiles)

    useEffect(() => {
        setLoading(true);
        dispatch(getListPaciente());
        dispatch(getListTerapia());
        dispatch(getListPerfilTerapeuta());
        setLoading(false);
    }, [dispatch]);
    
    if (!pacientes || !pacientes.length || !terapias || !terapias.length || !terapeutas || !terapeutas.length) {
        return (
            <p>
                Spiner
            </p>
        ) 
    };
    
    const indexOfLastPaciente = currentPage * pacientesPerPage;
    const indexOfFirstPost = indexOfLastPaciente - pacientesPerPage;
    const currentPacientes = pacientes.slice(indexOfFirstPost, indexOfLastPaciente);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
                                <th className="col-2">Prevision</th>
                                <th className="col-2">Telefono</th>
                                <th className="col-2">Pago Derivacion</th>
                                <th className="col-1">Derivar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Pacientes pacientes={currentPacientes} loading={loading} terapias={terapias} terapeutas={terapeutas} />
                        </tbody>
                    </table>
                </div>
                <div className='row d-flex'>
                    <div className='col'>
                        <Pagination 
                            pacientesPerPage={pacientesPerPage}
                            totalPacientes={pacientes.length} 
                            paginate={paginate} />
                    </div>
                    <div className='col'>
                        <Link className='btn btn-primary float-right'>Todos los Pacientes</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    ) 
}

export default PacienteLista;
