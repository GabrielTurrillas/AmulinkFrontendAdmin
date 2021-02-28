import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import { postCreateTerapia, getRetrieveTerapia, putUpdateTerapia } from '../../redux/actions/terapiaActions';
import { getListPerfilTerapeuta } from '../../redux/actions/terapeutaActions';

import "react-datepicker/dist/react-datepicker.css";
/* Containers:
    DerivacionPacientes.js
 */
const FormularioTerapia = () => {
    const {register, handleSubmit, errors} = useForm();
    const { id:paciente } = useParams();
    const dispatch = useDispatch();
    const perfiles = useSelector(state => state.terapeutaReducer.perfiles)
    const idTerapia = useSelector(state => state.terapiaReducer.terapia.id)
    const onSubmit = (data) => {
        const { captacion, motivoConsulta, userAccount } = data
        const body = JSON.stringify({captacion, motivoConsulta, userAccount, paciente});
        if(!idTerapia || idTerapia.length) {
            dispatch(postCreateTerapia(body));
        }
        else{
            dispatch(putUpdateTerapia(idTerapia, body));
        }
    };
    useEffect(() => {
        dispatch(getListPerfilTerapeuta())
    }, [dispatch])
    useEffect(() => {
        dispatch(getRetrieveTerapia(paciente));
    },[dispatch, paciente]);
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Captacion - Motivo Consulta */} 
                <div className='row'>
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text"
                            name="captacion" 
                            placeholder="Captacion"
                            ref={register({
                                required:'Campo "Comuna de residencia" obligatorio',
                            })}
                        />
                        {errors.comunaResidencia && <p>{errors.comunaResidencia.message}</p>}
                    </div>
                    <div className='form-group col-6'> 
                        <input
                            className='form-control' 
                            type="text"
                            name="motivoConsulta" 
                            placeholder="Motivo de Consulta"
                            ref={register({
                                required:'Campo "Ocupacion o Profecion" obligatorio',
                            })}
                        />
                        {errors.ocupacionProfecion && <p>{errors.ocupacionProfecion.message}</p>}
                    </div>
                </div>

                {/* Fecha Inicio de Terapia */}
{/*                 <div className='row'>
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text"
                            name="fechaInicio" 
                            placeholder="Fecha de Inicio"
                            ref={register({
                                required:'Campo "Comuna de residencia" obligatorio',
                            })}
                        />
                        {errors.comunaResidencia && <p>{errors.comunaResidencia.message}</p>}
                    </div>
                </div> */}

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
