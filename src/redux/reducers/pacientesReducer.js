import { 
    FETCH_PACIENTES_SUCCESS, 
    FETCH_PACIENTES_FAILURE,
    ADD_PACIENTE_SUCCESS,
    ADD_PACIENTE_FAILURE,
    FETCH_PACIENTE_DETALLE_SUCCESS,
    FETCH_PACIENTE_DETALLE_FAILURE,
    UPDATE_PACIENTE_SUCCESS,
    UPDATE_PACIENTE_FAILURE,
} from '../actions/types';


const initialState = {
    pacientes: [],
    pacienteDetalle: {},
    errors: '',
};


const pacientesReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_PACIENTES_SUCCESS:
            return {
                ...state,
                pacientes: action.payload,
                errors: ''
            }
        case FETCH_PACIENTES_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case ADD_PACIENTE_SUCCESS:
            return {
                ...state,
                pacientes: [action.payload, ...state.pacientes],
                errors:''
            }
        case ADD_PACIENTE_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case FETCH_PACIENTE_DETALLE_SUCCESS:
            return {
                ...state,
                pacienteDetalle: action.payload
            }
        case FETCH_PACIENTE_DETALLE_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case UPDATE_PACIENTE_SUCCESS:
            return {
                ...state,
                pacienteDetalle: action.payload,
            }
        case UPDATE_PACIENTE_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        default:
            return state
    }
}

export default pacientesReducer;

