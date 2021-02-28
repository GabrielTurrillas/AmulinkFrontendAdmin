import axios from '../../axios';
import {
    FETCH_PERFILES_SUCCESS,
    FETCH_PERFILES_FAILURE,
} from './types';


//COMPONENTES: TablaReporteComercial, FormularioTerapia
export const getListPerfilTerapeuta = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('/api/terapeuta/listPerfilTerapeuta', config)
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
