import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Pacientes = ({ pacientes, loading, terapias, terapeutas }) => {
    if(loading) {
        return <h2>Loading...</h2>; 
    }

    const terapeutaDePaciente = (terapias, idPaciente, terapeutas) => {
        const terapia = terapias.find(terapia => terapia.paciente === idPaciente)
        if (!terapia) {
            return 'No Derivado'
        }
        const terapeuta = terapeutas.find(terapeuta => terapeuta.id === terapia.userAccount)
        if (!terapeuta){
            return 'undefined'
        }
        const nombreTerapeuta = terapeuta.nombre + " " + terapeuta.apellidoPaterno
        return nombreTerapeuta
    }

    const btnDerivar = (terapias, idPaciente) => {
        const terapia = terapias.find(terapia => terapia.paciente === idPaciente)
        console.log(terapia)
        if (!terapia) {
            return 'btn btn-primary btn-sm'
        }
        return 'btn btn-secondary btn-sm'
    }

    return ( 
        <Fragment>
            <ul className='list-group mb-4'>
                {pacientes.map(({ id, nombre, apellidoPaterno, telefono, prevision, pagoDerivacion }) =>
                    <tr key={id} className='clickable-row d-flex'>
                        <th className='col-1' scope="row">{id}</th>
                        <td className='col-2'><Link to={"pacientes/"+id}>{nombre} {apellidoPaterno}</Link></td>
                        <td className='col-2'><Link to={"pacientes/"+id}>{terapeutaDePaciente(terapias, id, terapeutas)}</Link></td>
                        <td className='col-2'><Link to={"pacientes/"+id}>{prevision}</Link></td>
                        <td className='col-2'><Link to={"pacientes/"+id}>{telefono}</Link></td>
                        <td className='col-2'><Link to={"pacientes/"+id}>{pagoDerivacion ? 'Si' : 'No'}</Link></td>
                        <td className='col-1'><Link className={btnDerivar(terapias, id)} to={'/derivacion/'+id} role='button'>Derivar</Link></td>
                    </tr>
                )}
            </ul>
        </Fragment>
    )
};

export default Pacientes;
