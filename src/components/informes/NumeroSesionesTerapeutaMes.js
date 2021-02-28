import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNumeroSesionesTerapeutaMes } from '../../redux/actions/informesActions';
import { fetchPerfiles } from '../../redux/actions/terapeutaActions';
import { useForm } from 'react-hook-form';

//[COMPONENTE NO UTILIZADO AUN]
const NumeroSesionesTerapeutaMes = () => {
    const numeroSesionesTerapeutaMes = useSelector(state => state.informesReducer.numeroSesionesTerapeutaMes)
    const perfiles = useSelector(state => state.terapeutaReducer.perfiles) 
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        dispatch(fetchPerfiles())
    }, [dispatch]);
    const onSubmit = (data) => {
        const {terapeuta, mes, año} = data;
        dispatch(fetchNumeroSesionesTerapeutaMes(terapeuta, mes, año));
    }
    return (
        <Fragment>
            <p>Numero de Sesiones: {numeroSesionesTerapeutaMes}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col-6 mt-4'>
                        <h5>Ingrese mes</h5>
                        <div className="form-group">
                            <select className="form-control" name='mes' ref={register}>
                                <option value="1">Enero</option>
                                <option value="2">Febrero</option>
                                <option value="3">Marzo</option>
                                <option value="4">Abril</option>
                                <option value="5">Mayo</option>
                                <option value="6">Junio</option>
                                <option value="7">Julio</option>
                                <option value="8">Agosto</option>
                                <option value="9">Septiembre</option>
                                <option value="0">Octubre</option>
                                <option value="11">Nobiembre</option>
                                <option value="12">Diciembre</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 mt-4'>
                        <h5>Ingrese Año</h5>
                        <input
                            className='form-control' 
                            type="text"
                            name="año" 
                            defaultValue={new Date().getFullYear()}
                            ref={register({
                                required:'Campo "Año" obligatorio',
                            })}
                        />
                        {errors.año && <p>{errors.año.message}</p>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 mt-4'>
                        <h5>Terapeuta</h5>
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1" name='terapeuta' ref={register}>
                                {perfiles.map(({id, nombre, apellidoPaterno}) => {
                                    return(
                                        <option value={id} key={id}>{nombre} {apellidoPaterno}</option>
                                    )
                                })};
                            </select>
                        </div>
                    </div>
                </div>
                <button className='mt-2 btn btn-success' type='submit'>Sesiones del Mes</button>
            </form>
        </Fragment>
    );
};

export default NumeroSesionesTerapeutaMes;