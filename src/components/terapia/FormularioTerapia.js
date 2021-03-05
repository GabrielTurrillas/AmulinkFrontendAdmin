import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom'
import { postCreateTerapia, getRetrieveTerapia, putUpdateTerapia } from '../../redux/actions/terapiaActions';
import { getListPerfilTerapeuta } from '../../redux/actions/terapeutaActions';

import "react-datepicker/dist/react-datepicker.css";
/* Containers:
    DerivacionPacientes.js
 */
const FormularioTerapia = () => {
    const histroy = useHistory()
    const {register, handleSubmit} = useForm();
    const { id:paciente } = useParams();
    const dispatch = useDispatch();
    const perfiles = useSelector(state => state.terapeutaReducer.perfiles)
    const idTerapia = useSelector(state => state.terapiaReducer.terapia.id)

    const routeChange = () => {
        let path = `/pacientes`;
        histroy.push(path);
    };

    const onSubmit = (data) => {
        const { userAccount } = data
        const body = JSON.stringify({ userAccount, paciente});
        if(!idTerapia || idTerapia.length) {
            dispatch(postCreateTerapia(body));
        }
        else{
            dispatch(putUpdateTerapia(idTerapia, body));
        }
        routeChange();
    };

    useEffect(() => {
        dispatch(getListPerfilTerapeuta())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getRetrieveTerapia(paciente));
    },[dispatch, paciente]);

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Derivar a */}
                <div className='row'>
                    <div className='col-6 mt-4'>
                        <h5>Derivar a</h5>
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1" name='userAccount' ref={register}>
                                {perfiles.map(({id, nombre, apellidoPaterno}) => {
                                    return(
                                        <option value={id} key={id}>{nombre} {apellidoPaterno}</option>
                                    )
                                })};
                            </select>
                        </div>
                    </div>
                </div>
                <button className='mt-2 btn btn-success' type='submit'>Derivar</button>
            </form>
        </Fragment>
    );
}

export default FormularioTerapia;
