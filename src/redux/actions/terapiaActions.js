import axios from '../../axios';
import {
    FETCH_SESIONES_SUCCESS,
    FETCH_SESIONES_FAILURE,
    FETCH_TERAPIA_SUCCESS,
    FETCH_TERAPIA_FAILURE,
    FETCH_SESION_SUCCESS,
    FETCH_SESION_FAILURE,
    POST_TERAPIA_SUCCESS,
    POST_TERAPIA_FAILURE,
    PUT_TERAPIA_SUCCESS,
    PUT_TERAPIA_FAILURE,
} from './types';


//COMPONENTES: SesionDetalle
export const getRetrieveSesion = (idSesion) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('/api/terapia/retrieveSesion/'+idSesion, config)
    .then(res => {
        dispatch({
            type: FETCH_SESION_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_SESION_FAILURE,
            payload: err.data
        });
    })
};


//COMPONENTES: SesionLista
export const getListSesion = (idPaciente) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('/api/terapia/listSesion/'+idPaciente, config)
    .then(res => {
        dispatch({
            type: FETCH_SESIONES_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_SESIONES_FAILURE,
            payload: err.data
        });
        console.log(err);
    });
};


//COMPONENTES: PacienteDetalle, FormularioTerapia,
export const getRetrieveTerapia = (idPaciente) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('/api/terapia/retrieveTerapia/'+idPaciente, config)
    .then(res => {
        dispatch({
            type: FETCH_TERAPIA_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_TERAPIA_FAILURE,
            payload: err.data
        })
        console.log(err)
    });
};


//COMPONENTES: FormularioTerapia, 
export const postCreateTerapia = (body) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.post("/api/terapia/createTerapia", body, config)
    .then(res => {
        dispatch({
            type: POST_TERAPIA_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: POST_TERAPIA_FAILURE,
            payload: err.data
        });
    });
};


//COMPONENTES: FormularioTerapia, 
export const putUpdateTerapia = (id, body) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.put(`/api/terapia/updateTerapia/${id}`, body, config)
    .then(res => {
        dispatch({
            type: PUT_TERAPIA_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: PUT_TERAPIA_FAILURE,
            payload: err.data
        });
    });
};


