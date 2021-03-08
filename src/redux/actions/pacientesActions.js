import axios from '../../axios';
import {  
    FETCH_PACIENTES_SUCCESS, 
    FETCH_PACIENTES_FAILURE ,
    ADD_PACIENTE_SUCCESS,
    ADD_PACIENTE_FAILURE,
    FETCH_PACIENTE_DETALLE_SUCCESS,
    FETCH_PACIENTE_DETALLE_FAILURE,
    UPDATE_PACIENTE_SUCCESS,
    UPDATE_PACIENTE_FAILURE,
} from './types';

//COMPONENTES: PacienteLista
export const getListPaciente = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    axios.get("/api/paciente/listPaciente", config)
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


//COMPONENTES: FormularioModificarPaciente, PacienteDetalle
export const getRetrievePaciente = (idPaciente) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('/api/paciente/retrievePaciente/'+idPaciente, config)
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


//COMPONENTES: FormularioPaciente
export const postCreatePaciente = (startDate ,{ rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, direccion, comunaResidencia, prevision, captacion, motivoConsulta, valorSesion }) => async dispatch => {
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
        genero, direccion, comunaResidencia,
        prevision, captacion, motivoConsulta, valorSesion });
    axios.post('/api/paciente/createPaciente', body, config)
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


//COMPONENTES: FormularioModificarPaciente
export const putUpdatePaciente = (idPaciente , fechaNacimiento, { rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, direccion, comunaResidencia, prevision, captacion, motivoConsulta, pagoDerivacion, valorSesion }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    const body = JSON.stringify({rut, nombre, apellidoPaterno,
        apellidoMaterno, telefono, email, fechaNacimiento,
        genero, direccion, comunaResidencia, prevision,
        captacion, motivoConsulta, pagoDerivacion, valorSesion });
    console.log('body', body)
    axios.put(`api/paciente/updatePaciente/${idPaciente}`, body, config)
    .then(res =>{
        dispatch({
            type: UPDATE_PACIENTE_SUCCESS,
            payload: res.data
        })
    })
    .catch (err=>{
        dispatch({
            type: UPDATE_PACIENTE_FAILURE,
            errors: err.data
        });
    }); 
};






