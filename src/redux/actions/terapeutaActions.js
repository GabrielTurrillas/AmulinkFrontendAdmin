import axios from '../../axios';
import {
    FETCH_PERFIL_SUCCESS,
    FETCH_PERFIL_FAILURE,
    FETCH_PERFILES_SUCCESS,
    FETCH_PERFILES_FAILURE,
    PUT_PERFIL_SUCCESS,
    PUT_PERFIL_FAILURE
} from './types';


//COMPONENTES:
export const fetchPerfil = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('/api/terapeuta/perfil', config)
    .then(res => {
        dispatch({
            type: FETCH_PERFIL_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_PERFIL_FAILURE,
            payload: err.data
        });
        console.log(err);
    });
};


//COMPONENTES: TablaReporteComercial, FormularioTerapia
export const fetchPerfiles = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('/api/terapeuta/admin/perfiles', config)
    .then(res => {
        dispatch({
            type: FETCH_PERFILES_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_PERFILES_FAILURE,
            payload: err.data
        });
        console.log(err);
    });
};


//COMPONENTES:
export const putPerfil = (body) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.put("/api/terapeuta/modificar_perfil", body, config)
    .then(res => {
        dispatch({
            type: PUT_PERFIL_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: PUT_PERFIL_FAILURE,
            payload: err.data
        });
    });
};  