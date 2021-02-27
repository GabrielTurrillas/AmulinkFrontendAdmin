import axios from '../../axios';
import {
    FETCH_SESIONES_SUCCESS,
    FETCH_SESIONES_FAILURE,
    ADD_SESION_SUCCESS,
    ADD_SESION_FAILURE,
    FETCH_TERAPIA_SUCCESS,
    FETCH_TERAPIA_FAILURE,
    FETCH_SESION_SUCCESS,
    FETCH_SESION_FAILURE,
    POST_TERAPIA_SUCCESS,
    POST_TERAPIA_FAILURE,
    PUT_TERAPIA_SUCCESS,
    PUT_TERAPIA_FAILURE,
} from './types';



export const fetchSesion = (idSesion) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get("/api/terapia/sesion/sesion_detalle/"+idSesion, config)
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

export const fetchSesiones = (idPaciente) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get("/api/terapia/sesion/"+idPaciente, config)
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

export const fetchTerapia = (idPaciente) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get("/api/terapia/"+idPaciente, config)
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

export const postTerapia = (body) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.post("/api/terapia/admin/create_terapia", body, config)
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

export const putTerapia = (id, body) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.put(`/api/terapia/admin/put_terapia/${id}`, body, config)
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

export const agregarSesiones = (body, idPaciente) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.post('/api/terapia/sesion/'+idPaciente, body, config)
    .then(res => {
        dispatch({
            type: ADD_SESION_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: ADD_SESION_FAILURE,
            payload: err.data
        });
    });
};
