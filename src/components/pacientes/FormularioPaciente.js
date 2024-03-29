import React, { Fragment , useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import { postCreatePaciente } from '../../redux/actions/pacientesActions';

import "react-datepicker/dist/react-datepicker.css";
/* Containers:
    AgregarPacientes.js
*/
const FormularioPaciente = () => {
    const history = useHistory()
    const [sesionValor, setSesionValor] = useState("");
    const [startDate, setStartDate] = useState(new Date()); 
    const {register, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();
    const routeChange = () => {
        let path = `/listaPacientes`;
        history.push(path);
    }
    const onSubmit = (data) => {
        dispatch(postCreatePaciente(startDate, data));
        routeChange();
    };

    const changeValorSesion = e => {
        if (e.target.value === 'Fonasa' ) {
            setSesionValor("15000")
        }
        if (e.target.value === 'Isapre' ) {
            setSesionValor("30000")
        }
        if (e.target.value === 'Bajo Costo' ) {
            setSesionValor("13000")
        }
        if (e.target.value === 'Pasantia' ) {
            setSesionValor("8000")
        }
    };

    return(
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'> 
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text"
                            name="rut" 
                            placeholder="Rut"
                            ref={register({
                                required:'Campo "Rut" obligatorio',
                            })}
                        /> 
                        {errors.rut && <p>{errors.rut.message}</p>}
                    </div>
                    <div className='form-group col-6'>
                        <input
                            className='form-control'
                            type="text"
                            name="nombre" 
                            placeholder="Nombre"
                            ref={register({
                                required: 'Campo "nombre" obligatorio',
                                minLength: {value: 2, message: 'campo "nombre" debe tener mas de 1 caracter'}
                            })}
                        /> 
                        {errors.nombre && <p>{errors.nombre.message}</p>}
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text"
                            name="apellidoPaterno" 
                            placeholder="Apellido Paterno"
                            ref={register({
                                required:'Campo "Apellido Paterno" obligatorio',
                            })}
                        /> 
                        {errors.apellidoPaterno && <p>{errors.apellidoPaterno.message}</p>}
                    </div>
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text" 
                            name="apellidoMaterno" 
                            placeholder="Apellido Materno"
                            ref={register({
                                required:'Campo "Apellido Materno" obligatorio',
                                minLength: {value: 2, message: 'campo "Apellido Materno" debe tener mas de 1 caracter'}
                            })}
                        /> 
                        {errors.apellidoMaterno && <p>{errors.apellidoMaterno.message}</p>}
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text"
                            name="telefono" 
                            placeholder="Telefono"
                            ref={register({
                                required:'Campo "Telefono" obligatorio',
                            })}
                        /> 
                        {errors.telefono && <p>{errors.telefono.message}</p>}
                    </div>
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text"
                            name="email" 
                            placeholder="Email"
                            ref={register({
                                required:'Campo "Email" obligatorio',
                            })}
                        /> 
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text"
                            name="direccion" 
                            placeholder="Direccion"
                            ref={register({
                                required:'Campo "Direccion" obligatorio',
                            })}
                        /> 
                        {errors.direccion && <p>{errors.direccion.message}</p>}
                    </div>
                    <div className='form-group col-6'> 
                        <input
                            className='form-control' 
                            type="text"
                            name="motivoConsulta" 
                            placeholder="Motivo de Consulta"
                            ref={register({
                                required:'Campo "Motivo de Consulta" obligatorio',
                            })}
                        />
                        {errors.motivoConsulta && <p>{errors.motivoConsulta.message}</p>}
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text"
                            name="comunaResidencia" 
                            placeholder="Comuna de residencia"
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
                            name="captacion" 
                            placeholder="Captacion"
                            ref={register({
                                required:'Campo "Comuna de residencia" obligatorio',
                            })}
                        />
                        {errors.comunaResidencia && <p>{errors.comunaResidencia.message}</p>}
                    </div>
                    <div className='col form-group'>
                        <h5>Fecha de Nacimiento</h5>
                        <div className='form-group'>
                            <DatePicker
                                className='form-control' 
                                id='fechaNacimiento' 
                                selected={startDate} 
                                onChange={date => setStartDate(date)} 
                            />
                        </div>
                    </div>
                    <div className='col-1'>
                        <h5>Genero</h5>
                    </div>
                    <div className='col-5'>
                        <div className="form-check">
                            <input 
                                className="form-check-input"
                                type="radio"
                                name="genero" 
                                id="femenino"
                                value='Femenino'
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
                                ref={register({
                                    required:'Campo "Genero" obligatorio',
                                })}
                                />
                            <label className="form-check-label" for="otro">
                                Otro
                            </label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h5>Prevision o Programa</h5>
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1" ref={register} name='prevision' onChange={changeValorSesion}>
                                <option selected>Prevision/Programa</option>
                                <option value='Fonasa'>Fonasa</option>
                                <option value='Isapre'>Isapre</option>
                                <option value='Bajo Costo'>Bajo Costo</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group col'>
                        <h5>Valor de la Sesion</h5>
                        <input
                            className='form-control'
                            type="text"
                            name="valorSesion" 
                            placeholder="Valor de la Sesion"
                            defaultValue={sesionValor}
                            ref={register({
                                required: 'Campo "Valor de la Sesion" obligatorio',
                            })}
                        /> 
                        {errors.valorSesion && <p>{errors.valorSesion.message}</p>}
                    </div>

                </div>
                <button className='mb-3 btn btn-success' type='submit'>Ingresar</button>
            </form>
        </Fragment>
    );
};

export default FormularioPaciente;

