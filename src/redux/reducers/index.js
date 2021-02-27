import { combineReducers } from 'redux';
import auth from './auth';
import pacientesReducer from './pacientesReducer';
import terapiaReducer from './terapiaReducer';
import terapeutaReducer from './terapeutaReducer';
import informesReducer from './informesReducer';

export default combineReducers({
    auth,
    pacientesReducer,
    terapiaReducer,
    terapeutaReducer,
    informesReducer
});