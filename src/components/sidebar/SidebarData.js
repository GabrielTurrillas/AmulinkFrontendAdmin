import React from 'react'
import * as MdIcons  from "react-icons/md";
import * as FaIcons  from "react-icons/fa";
import * as BiIcons  from "react-icons/bi";

export const SidebarData = [
    {
        title:'Perfil',
        path:'#', 
        icon: <FaIcons.FaUserCircle/>,
        cName: 'nav-text'
    },
    {
        title:'Pacientes Activos',
        path:'#',
        icon: <MdIcons.MdPersonPin/>,
        cName: 'nav-text'
    },
    {
        title:'Pacientes Inactivos',
        path:'#',
        icon: <BiIcons.BiUserPin/>,
        cName: 'nav-text'
    },
]
