import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


const Sidebar = () => {
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    const guestNav = () => (
        <></>
    )

    const authNav = () => (
        <Fragment>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </Fragment>
    )
    
    return (
        <Fragment>
            {isAuthenticated ? authNav() : guestNav()}
        </Fragment>
    );
}

/* const styleSesiones = {
        display:'flex',
        justifyContent:'flex-start',
        alignItems: 'center',
        listStyle:'none',
        height:'60px',
        width:'100%',
        fontSize:'18px',
        padding:'0 16px',
} */

export default Sidebar;
