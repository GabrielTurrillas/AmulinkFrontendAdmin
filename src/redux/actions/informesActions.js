import axios from '../../axios';
import {
    FETCH_NUMERO_SESIONES_MES_SUCCESS,
    FETCH_NUMERO_SESIONES_MES_FAILURE,
    FETCH_NUMERO_PACIENTES_ACTIVOS_SUCCESS,
    FETCH_NUMERO_PACIENTES_ACTIVOS_FAILURE,
    FETCH_NUMERO_SESIONES_ANUALES_SUCCESS,
    FETCH_NUMERO_SESIONES_ANUALES_FAILURE,
} from './types';

export const fetchNumeroSesionesMensuales = (mes,anio) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get(`api/informes/numeroSesionesMensuales/${mes}/${anio}`, config)
    .then(res => {
        dispatch({
            type: FETCH_NUMERO_SESIONES_MES_SUCCESS,
            payload: res.data
        })
        console.log(res.data)
    })
    .catch(err => {
        dispatch({
            type: FETCH_NUMERO_SESIONES_MES_FAILURE,
            payload: err.data
        });
    });
};

export const fetchNumeroPacientesActivos = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get(`api/informes/numeroPacientesActivosView`, config)
    .then(res => {
        dispatch({
            type: FETCH_NUMERO_PACIENTES_ACTIVOS_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_NUMERO_PACIENTES_ACTIVOS_FAILURE,
            payload: err.data
        });
    });
};

export const fetchNumeroSesionesAnuales = (prevision, terapeuta, año) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get(`api/informes/numeroSesionesAnualesView/${prevision}/${terapeuta}/${año}`, config)
    .then(res => {
        dispatch({
            type:FETCH_NUMERO_SESIONES_ANUALES_SUCCESS,
            payload: res.data,
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_NUMERO_SESIONES_ANUALES_FAILURE,
            payload: err.data
        });
    });
    console.log(`api/informes/numeroSesionesAnualesView/${prevision}/${terapeuta}/${año}`)
};

