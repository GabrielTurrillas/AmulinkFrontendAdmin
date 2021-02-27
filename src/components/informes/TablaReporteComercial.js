import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNumeroSesionesAnuales } from '../../redux/actions/informesActions';
import { fetchPerfiles } from '../../redux/actions/terapeutaActions';
import { useForm } from 'react-hook-form';

const TablaReporteComercial = () => {
    const numeroSesionesAnuales = useSelector(state => state.informesReducer.numeroSesionesAnuales)
    const perfiles = useSelector(state => state.terapeutaReducer.perfiles)
    console.log('perfiles:',perfiles);
    console.log('numeroSesionesAnuales:',numeroSesionesAnuales)
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        dispatch(fetchPerfiles());
    }, [dispatch]);

    const onSubmit = ({año}) => {
        perfiles.forEach(perfil => {
            dispatch(fetchNumeroSesionesAnuales('Fonasa', perfil.id, parseInt(año)))
            dispatch(fetchNumeroSesionesAnuales('Isapre', perfil.id, parseInt(año)))
        });
    };
    return (
        <Fragment>
            <table className="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col">Terapeuta</th>
                        <th scope="col">Prevision</th>
                        <th scope="col">Enero</th>
                        <th scope="col">Febrero</th>
                        <th scope="col">Marzo</th>
                        <th scope="col">Abril</th>
                        <th scope="col">Mayo</th>
                        <th scope="col">Junio</th>
                        <th scope="col">Julio</th>
                        <th scope="col">Agosto</th>
                        <th scope="col">Septiembre</th>
                        <th scope="col">Octubre</th>
                        <th scope="col">Noviembre</th>
                        <th scope="col">Diciembre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        perfiles.map(({id,nombre,apellidoPaterno})=>{
                        const numeroSesionesAnualesIsapre = numeroSesionesAnuales.find(sesiones=>sesiones.prevision==='Isapre' && sesiones.terapeuta===nombre+' '+apellidoPaterno)
                        console.log('numeroSesionesAnualesIsapre:',numeroSesionesAnualesIsapre)
                        
                        const numeroSesionesAnualesFonasa = numeroSesionesAnuales.find(sesiones=>sesiones.prevision==='Fonasa' && sesiones.terapeuta===nombre+' '+apellidoPaterno)
                        console.log('numeroSesionesAnualesFonasa:',numeroSesionesAnualesFonasa)
                        const { prevision:previsionFonasa,
                            enero:eneroFonasa,
                            febrero:febreroFonasa,
                            marzo:marzoFonasa,
                            abril:abrilFonasa,
                            mayo:mayoFonasa,
                            junio:junioFonasa,
                            julio:julioFonasa,
                            agosto:agostoFonasa,
                            septiembre:septiembreFonasa,
                            octubre:octubreFonasa,
                            noviembre:noviembreFonasa,
                            diciembre:diciembreFonasa} = numeroSesionesAnualesFonasa || {}
                            
                        const { prevision:previsionIsapre,
                            enero:eneroIsapre,
                            febrero:febreroIsapre,
                            marzo:marzoIsapre,
                            abril:abrilIsapre,
                            mayo:mayoIsapre,    
                            junio:junioIsapre,
                            julio:julioIsapre,
                            agosto:agostoIsapre,
                            septiembre:septiembreIsapre,
                            octubre:octubreIsapre,
                            noviembre:noviembreIsapre,
                            diciembre:diciembreIsapre} = numeroSesionesAnualesIsapre || {}

                            const totalEnero = eneroIsapre + febreroFonasa 
                            const totalFebrero =febreroIsapre+febreroFonasa
                            const totalMarzo =marzoIsapre+marzoFonasa
                            const totalAbril =abrilIsapre+abrilFonasa
                            const totalMayo =mayoIsapre+mayoFonasa
                            const totalJunio =junioIsapre+junioFonasa
                            const totalJulio =julioIsapre+julioFonasa
                            const totalAgosto =agostoIsapre+agostoFonasa
                            const totalSeptiembre =septiembreIsapre+septiembreFonasa
                            const totalOctubre =octubreIsapre+octubreFonasa
                            const totalNoviembre =noviembreIsapre+noviembreFonasa
                            const totalDiciembre =diciembreIsapre+diciembreFonasa

                        return (
                            <Fragment key={id}>
                                <tr>
                                    <th rowSpan="4">{nombre} {apellidoPaterno}</th>
                                </tr>
                                <tr>
                                    <th>{previsionIsapre}</th>
                                    <td>{eneroIsapre}</td>
                                    <td>{febreroIsapre}</td>
                                    <td>{marzoIsapre}</td>
                                    <td>{abrilIsapre}</td>
                                    <td>{mayoIsapre}</td>
                                    <td>{junioIsapre}</td>
                                    <td>{julioIsapre}</td>
                                    <td>{agostoIsapre}</td>
                                    <td>{septiembreIsapre}</td>
                                    <td>{octubreIsapre}</td>
                                    <td>{noviembreIsapre}</td>
                                    <td>{diciembreIsapre}</td>
                                </tr>
                                <tr>
                                    <th>{previsionFonasa}</th>
                                    <td>{eneroFonasa}</td>
                                    <td>{febreroFonasa}</td>
                                    <td>{marzoFonasa}</td>
                                    <td>{abrilFonasa}</td>
                                    <td>{mayoFonasa}</td>
                                    <td>{junioFonasa}</td>
                                    <td>{julioFonasa}</td>
                                    <td>{agostoFonasa}</td>
                                    <td>{septiembreFonasa}</td>
                                    <td>{octubreFonasa}</td>
                                    <td>{noviembreFonasa}</td>
                                    <td>{diciembreFonasa}</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>{String(totalEnero)}</td>
                                    <td>{String(totalFebrero)}</td>
                                    <td>{String(totalMarzo)}</td>
                                    <td>{String(totalAbril)}</td>
                                    <td>{String(totalMayo)}</td>
                                    <td>{String(totalJunio)}</td>
                                    <td>{String(totalJulio)}</td>
                                    <td>{String(totalAgosto)}</td>
                                    <td>{String(totalSeptiembre)}</td>
                                    <td>{String(totalOctubre)}</td>
                                    <td>{String(totalNoviembre)}</td>
                                    <td>{String(totalDiciembre)}</td>
                                </tr>
                            </Fragment>
                        )
                    })}
                </tbody>
            </table>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <button className='mt-2 btn btn-success' type='submit'>Sesiones Anuales Totales</button>
            </form>
        </Fragment>
    );
};

export default TablaReporteComercial;
