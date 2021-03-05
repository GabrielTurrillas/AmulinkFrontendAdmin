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
    LIST_TERAPIA_FAILURE,
    LIST_TERAPIA_SUCCESS,
} from '../actions/types';

const initialState = {
    sesiones: [],
    terapia: {
        
    },
    terapias: [
        {}
    ],
    sesion:[],
    errors:'',
}

const terapiaReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_SESIONES_SUCCESS:
            return {
                ...state,
                sesiones: action.payload,
                errors:''
            }
        case FETCH_SESIONES_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case ADD_SESION_SUCCESS:
            return {
                ...state,
                sesiones: [action.payload, ...state.sesiones],
                errors:'',
            }
        case ADD_SESION_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case FETCH_TERAPIA_SUCCESS:
            return {
                ...state,
                terapia: action.payload,
                errors: '',
            }
        case FETCH_TERAPIA_FAILURE:
            return {
                ...state,
                terapia:'',
                errors: action.payload,
            }
        case FETCH_SESION_SUCCESS:
            return {
                ...state,
                sesion: action.payload,
                errors: '',
            }
        case FETCH_SESION_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case POST_TERAPIA_SUCCESS:
            return {
                ...state,
                terapia: action.payload,
                errors: '',
            }
        case POST_TERAPIA_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case PUT_TERAPIA_SUCCESS:
            return {
                ...state,
                terapia: action.payload,
                errors: '',
            }
        case PUT_TERAPIA_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case LIST_TERAPIA_SUCCESS:
            return {
                ...state,
                terapias: action.payload,
                errors: '',
            }
        case LIST_TERAPIA_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state
    }
}
export default terapiaReducer;