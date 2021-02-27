import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNumeroPacientesActivos } from '../../redux/actions/informesActions';

const NumeroPacientesActivos = () => {
    const numeroPacientesActivos = useSelector(state => state.informesReducer.numeroPacientesActivos)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNumeroPacientesActivos())
    }, [dispatch]);
    return (
        <Fragment>
            <p>Numero de Pacientes Activos: {numeroPacientesActivos}</p>
        </Fragment>
    );
};

export default NumeroPacientesActivos;