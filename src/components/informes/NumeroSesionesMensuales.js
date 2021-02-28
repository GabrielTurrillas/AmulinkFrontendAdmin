import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getShowNumeroSesionesMensuales } from '../../redux/actions/informesActions';
import { useForm } from 'react-hook-form';


const NumeroSesionesMensuales = () => {
    const numeroSesionesMes = useSelector(state => state.informesReducer.numeroSesionesMes)
    const anioDefault = new Date().getFullYear();
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const { mes, anio } = data
        dispatch(getShowNumeroSesionesMensuales(mes,anio))
    };
    return (
        <Fragment>
            <p>Numero de Sesiones Mensuales Totales: {numeroSesionesMes}</p>
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
                            name="anio" 
                            defaultValue={anioDefault}
                            ref={register({
                                required:'Campo "Año" obligatorio',
                            })}
                        />
                        {errors.anio && <p>{errors.anio.message}</p>}
                    </div>
                </div>
                <button className='mt-2 btn btn-success' type='submit'>Sesiones del Mes</button>
            </form>
        </Fragment>
    );
}

export default NumeroSesionesMensuales;