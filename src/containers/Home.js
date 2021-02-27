import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  PacienteLista  from '../components/pacientes/PacienteLista';

const Home = ({ isAuthenticated }) => {
    const showLoginButton = () => (
        <Fragment>
            <Link className='btn btn-primary btn-lg mt-4' to='/login' role='button'>Login</Link>
        </Fragment>
    )
    const hide = () => (
        <Fragment></Fragment>
    )
    const showPacienteLista = () => (
        <PacienteLista />
    ) 
    const showIngresarPacienteButton = () => (
        <Fragment>
            <Link className='btn btn-primary mt-4' to='pacientes' role='button'>Ingresar Paciente</Link>
        </Fragment>
    )

    return (
        <Fragment>
            <h1 className='display-4'>Amülink</h1>
            <p className='lead'>Admin</p>
            {isAuthenticated ? showPacienteLista() : hide()}
            {isAuthenticated ? showIngresarPacienteButton() : showLoginButton()}
        </Fragment>
    );                      
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { } )(Home);