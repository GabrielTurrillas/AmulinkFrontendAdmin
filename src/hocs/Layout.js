import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/sidebar/Sidebar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../redux/actions/auth'

const Layout = (props) => {
    const {checkAuthenticated, load_user} = props
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, [checkAuthenticated, load_user])

    return(
        <div>
            <Nav />
            <Sidebar/>
            <div className='container mt-5'>
                <div className='jumbotron mt-5'>
                    <div className='ml-4 mr-4'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);