import { combineReducers } from 'redux';
import authReducer from './auth';
import pacientesReducer from './pacientesReducer';
import terapiaReducer from './terapiaReducer';
import terapeutaReducer from './terapeutaReducer';
import informesReducer from './informesReducer';

export default combineReducers({
    authReducer,
    pacientesReducer,
    terapiaReducer,
    terapeutaReducer,
    informesReducer
});