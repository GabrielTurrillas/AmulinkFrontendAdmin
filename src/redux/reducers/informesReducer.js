import {
    FETCH_NUMERO_SESIONES_MES_SUCCESS,
    FETCH_NUMERO_SESIONES_MES_FAILURE,
    FETCH_NUMERO_PACIENTES_ACTIVOS_SUCCESS,
    FETCH_NUMERO_PACIENTES_ACTIVOS_FAILURE,
    FETCH_NUMERO_SESIONES_ANUALES_SUCCESS,
    FETCH_NUMERO_SESIONES_ANUALES_FAILURE,
} from '../actions/types';

const initialState = {
    numeroSesionesMes:0,
    numeroPacientesActivos:0,
    numeroSesionesAnuales:[],
};

const terapeutaReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_NUMERO_SESIONES_MES_SUCCESS:
            return {
                ...state,
                numeroSesionesMes: action.payload,
                errors: '',
            }
        case FETCH_NUMERO_SESIONES_MES_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case FETCH_NUMERO_PACIENTES_ACTIVOS_SUCCESS:
            return {
                ...state,
                numeroPacientesActivos: action.payload,
                errors: '',
            }
        case FETCH_NUMERO_PACIENTES_ACTIVOS_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case FETCH_NUMERO_SESIONES_ANUALES_SUCCESS:
            return {
                ...state,
                numeroSesionesAnuales: [...state.numeroSesionesAnuales, action.payload],
                errors: '',
            }
        case FETCH_NUMERO_SESIONES_ANUALES_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state
    };
};
export default terapeutaReducer;