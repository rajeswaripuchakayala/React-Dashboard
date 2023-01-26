import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData' 
import Logo from '../Images/Logo.png'


function Sidebar(){
    return (
        <div className='Sidebar'>
            <img src={ Logo } />
            <h4>InnoWise LLC <br/>Katy, LLC</h4>
            <p>MAIN MENU</p>
            <ul className='SidebarList'>
            {SidebarData.map((val, key) => {
                return (
                <li 
                key={key} 
                className='row'
                id= {window.location.pathname == val.link ? "active" : ""}
                onClick={()=>{window.location.pathname = val.link
                }}
                >
                <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                </li>
                );
            })}
            </ul>
        </div>
    );
}

export default Sidebar;