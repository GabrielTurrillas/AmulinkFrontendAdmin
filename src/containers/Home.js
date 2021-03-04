import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({ isAuthenticated }) => {
    const hide = () => (
        <></>
    );
    const showLoginButton = () => (
        <Fragment>
            <Link className='btn btn-primary btn-lg mt-4' to='/login' role='button'>Login</Link>
        </Fragment>
    );
    const showAdmin = () => (
        <Fragment>
            <p className='lead'>Admin</p>
        </Fragment>
    );
    const showHome = () => (
        <Fragment>
            <p className='lead'>Home</p>
        </Fragment>
    );
    return (
        <Fragment>
            <h1 className='display-4'>Amülink</h1>
            {isAuthenticated ? showHome() : showAdmin()}
            {isAuthenticated ? hide() : showLoginButton()}
        </Fragment>
    );                      
};


const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, { } )(Home);