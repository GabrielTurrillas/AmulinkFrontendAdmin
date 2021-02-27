import axios from '../../axios';
import {  
    FETCH_PACIENTES_SUCCESS, 
    FETCH_PACIENTES_FAILURE ,
    ADD_PACIENTE_SUCCESS,
    ADD_PACIENTE_FAILURE,
    FETCH_PACIENTE_DETALLE_SUCCESS,
    FETCH_PACIENTE_DETALLE_FAILURE
} from './types';


export const fetchPacientes = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    axios.get("/api/paciente/admin/list", config)
    .then(res => {
        dispatch({
            type: FETCH_PACIENTES_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch ({
            type: FETCH_PACIENTES_FAILURE,
        })
        console.log(err)
    });
};

export const fetchPacienteDetalle = (idPaciente) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    console.log('idPaciente:', idPaciente)
    axios.get('/api/paciente/admin/'+idPaciente, config)
    .then(res => {
        dispatch({
            type: FETCH_PACIENTE_DETALLE_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch ({
            type: FETCH_PACIENTE_DETALLE_FAILURE,
        })
        console.log(err)
    });
};

export const postPacientes = (startDate ,{ rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, direccion, comunaResidencia, ocupacionProfecion, tipoTerapia }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    const fechaNacimiento = startDate
    const body = JSON.stringify({ rut, nombre, apellidoPaterno,
        apellidoMaterno, telefono, email, fechaNacimiento,
        genero, direccion, comunaResidencia, ocupacionProfecion,
        tipoTerapia });
    axios.post('/api/paciente/admin/create', body, config)
    .then(res =>{
        dispatch({
            type: ADD_PACIENTE_SUCCESS,
            payload: res.data
        })
    })
    .catch (err=>{
        dispatch({
            type: ADD_PACIENTE_FAILURE,
            errors: err.data
        });
    }); 
};

export const putPaciente = (idPaciente , fechaNacimiento, { rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, direccion, comunaResidencia, ocupacionProfecion, prevision }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    const body = JSON.stringify({ rut, nombre, apellidoPaterno,
        apellidoMaterno, telefono, email, fechaNacimiento,
        genero, direccion, comunaResidencia, ocupacionProfecion,
        prevision });
    axios.put(`api/paciente/admin/putPaciente/${idPaciente}`, body, config)
    .then(res =>{
        dispatch({
            type: ADD_PACIENTE_SUCCESS,
            payload: res.data
        })
    })
    .catch (err=>{
        dispatch({
            type: ADD_PACIENTE_FAILURE,
            errors: err.data
        });
    }); 
};






