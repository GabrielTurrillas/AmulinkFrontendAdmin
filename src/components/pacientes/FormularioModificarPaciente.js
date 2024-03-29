import React, { Fragment , useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { putUpdatePaciente, getRetrievePaciente } from '../../redux/actions/pacientesActions';

import "react-datepicker/dist/react-datepicker.css";
/* Containers:
    ModificarPaciente.js
*/
const FormularioModificarPaciente = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {id:idPaciente} = useParams()
    const pacienteDetalle = useSelector(state => state.pacientesReducer.pacienteDetalle)
    const {register, handleSubmit, errors} = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const {rut,nombre,apellidoPaterno,apellidoMaterno,
        telefono,email,fechaNacimiento,genero,direccion,
        comunaResidencia,prevision, captacion, motivoConsulta, pagoDerivacion, valorSesion} = pacienteDetalle || {}

    const routeChange = () => {
        let path = `/pacientes/ficha_paciente/${idPaciente}`;
        history.push(path);
    };

    useEffect(()=> {
        dispatch(getRetrievePaciente(idPaciente));
        setStartDate(new Date(fechaNacimiento));
    },[dispatch, idPaciente, fechaNacimiento]);

    const onSubmit = (data) => {
        console.log('data', data)
        dispatch(putUpdatePaciente(idPaciente, startDate, data));
        routeChange();
    };

    return(
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Rut - Nombre */}
                <div className='row'> 
                    <div className='form-group col-6'>
                        <h5>Rut</h5>
                        <input
                            className='form-control' 
                            type="text"
                            name="rut" 
                            placeholder="Rut"
                            defaultValue={rut}
                            ref={register({
                                required:'Campo "Rut" obligatorio',
                            })}
                        /> 
                        {errors.rut && <p>{errors.rut.message}</p>}
                    </div>
                    <div className='form-group col-6'>
                        <h5>Nombre</h5>
                        <input
                            className='form-control'
                            type="text"
                            name="nombre" 
                            placeholder="Nombre"
                            defaultValue={nombre}
                            ref={register({
                                required: 'Campo "nombre" obligatorio',
                                minLength: {value: 2, message: 'campo "nombre" debe tener mas de 1 caracter'}
                            })}
                        /> 
                        {errors.nombre && <p>{errors.nombre.message}</p>}
                    </div>
                </div>

                {/* Apellido Paterno - Apellido Materno */}
                <div className='row'>
                    <div className='form-group col-6'>
                        <h5>Apellido Paterno</h5>
                        <input
                            className='form-control' 
                            type="text"
                            name="apellidoPaterno" 
                            placeholder="Apellido Paterno"
                            defaultValue={apellidoPaterno}
                            ref={register({
                                required:'Campo "Apellido Paterno" obligatorio',
                            })}
                        /> 
                        {errors.apellidoPaterno && <p>{errors.apellidoPaterno.message}</p>}
                    </div>
                    <div className='form-group col-6'>
                        <h5>Apellido Materno</h5>
                        <input
                            className='form-control' 
                            type="text" 
                            name="apellidoMaterno" 
                            placeholder="Apellido Materno"
                            defaultValue={apellidoMaterno}
                            ref={register({
                                required:'Campo "Apellido Materno" obligatorio',
                                minLength: {value: 2, message: 'campo "Apellido Materno" debe tener mas de 1 caracter'}
                            })}
                        /> 
                        {errors.apellidoMaterno && <p>{errors.apellidoMaterno.message}</p>}
                    </div>
                </div>

                {/* Telefono - Email */}
                <div className='row'>
                    <div className='form-group col-6'>
                        <h5>Telefono</h5>
                        <input
                            className='form-control' 
                            type="text"
                            name="telefono" 
                            placeholder="Telefono"
                            defaultValue={telefono}
                            ref={register({
                                required:'Campo "Telefono" obligatorio',
                            })}
                        /> 
                        {errors.telefono && <p>{errors.telefono.message}</p>}
                    </div>
                    <div className='form-group col-6'>
                        <h5>Email</h5>
                        <input
                            className='form-control' 
                            type="text"
                            name="email" 
                            placeholder="Email"
                            defaultValue={email}
                            ref={register({
                                required:'Campo "Email" obligatorio',
                            })}
                        /> 
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </div>

                {/* Genero - Direccion */}
                <div className='row'>
                    <div className='form-group col-6'>
                        <h5>Direccion</h5>
                        <input
                            className='form-control' 
                            type="text"
                            name="direccion" 
                            placeholder="Direccion"
                            defaultValue={direccion}
                            ref={register({
                                required:'Campo "Direccion" obligatorio',
                            })}
                        /> 
                        {errors.direccion && <p>{errors.direccion.message}</p>}
                    </div>
                    <div className='form-group col-6'> 
                        <h5>Motivo de la Consulta</h5>
                        <input
                            className='form-control' 
                            type="text"
                            name="motivoConsulta" 
                            placeholder="Motivo de Consulta"
                            defaultValue={motivoConsulta}
                            ref={register({
                                required:'Campo "Motivo de Consulta" obligatorio',
                            })}
                        />
                        {errors.motivoConsulta && <p>{errors.motivoConsulta.message}</p>}
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-6'>
                        <h5>Comuna de Residencia</h5>
                        <input
                            className='form-control' 
                            type="text"
                            name="comunaResidencia" 
                            placeholder="Comuna de residencia"
                            defaultValue={comunaResidencia}
                            ref={register({
                                required:'Campo "Comuna de residencia" obligatorio',
                            })}
                        />
                        {errors.comunaResidencia && <p>{errors.comunaResidencia.message}</p>}
                    </div>
                    <div className='form-group col-6'>
                        <h5>Captacion</h5>
                        <input
                            className='form-control' 
                            type="text"
                            name="captacion" 
                            placeholder="Captacion"
                            defaultValue={captacion}
                            ref={register({
                                required:'Campo "captacion" obligatorio',
                            })}
                        />
                        {errors.comunaResidencia && <p>{errors.comunaResidencia.message}</p>}
                    </div>
                </div>

                {/* Captacion - Motivo Consulta */} 
                <div className='row'>
                    <div className='form-group col'>
                        <h5>Fecha de Naciemiento</h5>
                        <DatePicker
                            className='form-control' 
                            id='fechaNacimiento'
                            dateFormat='dd/MM/yyyy' 
                            selected={startDate} 
                            onChange={date => setStartDate(date)} 
                        />
                    </div>
                </div> 
                <div className='row'>
                    <div className='col'>
                        <h5>Genero</h5>
                        <div className="form-check">
                            <input 
                                className="form-check-input"
                                type="radio"
                                name="genero" 
                                id="femenino"
                                value='Femenino'
                                defaultChecked={genero === 'Femenino' ? 'checked' : undefined}
                                ref={register({
                                    required:'Campo "Genero" obligatorio',
                                })}
                                />
                            <label className="form-check-label" for="femenino">
                                Femenino
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="genero" 
                                id="masculino"
                                value='Masculino'
                                defaultChecked={genero === 'Masculino' ? 'checked': undefined}
                                ref={register({
                                    required:'Campo "Genero" obligatorio',
                                })}
                                />
                            <label className="form-check-label" for="masculino">
                                Masculino
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="genero" 
                                id="otro"
                                value='Otro'
                                defaultChecked={genero === 'Otro' ? 'checked' : undefined}
                                ref={register({
                                    required:'Campo "Genero" obligatorio',
                                })}
                                />
                            <label className="form-check-label" for="otro">
                                Otro
                            </label>
                        </div>
                    </div>
                    <div className='col'>
                        <h5>Pago de Derivacion</h5>
                        <input
                            type="checkbox"
                            className='btn-check'
                            id="pagoDerivacion"
                            name="pagoDerivacion"
                            defaultChecked={pagoDerivacion} 
                            ref={register({
                            })}
                        /> 
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-6'>
                        <h5>Prevision o Programa</h5>
                        <div className="form-group">
                            <select className="form-control" ref={register} name='prevision' defaultValue={prevision}>
                                <option value='Fonasa'>Fonasa</option>
                                <option value='Isapre'>Isapre</option>
                                <option value='Bajo Costo'>Bajo Costo</option>
                                <option value='Pasantia'>Pasantia</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group col-6'>
                        <h5>Valor de la Sesion</h5>
                        <input
                            className='form-control'
                            type="text"
                            name="valorSesion" 
                            placeholder="Valor de la Sesion"
                            defaultValue={valorSesion}
                            ref={register({
                                required: 'Campo "Valor de la Sesion" obligatorio',
                            })}
                        /> 
                        {errors.valorSesion && <p>{errors.valorSesion.message}</p>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col mt-4'>
                        <button className='mb-3 btn btn-success' type='submit'>Ingresar</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default FormularioModificarPaciente;
