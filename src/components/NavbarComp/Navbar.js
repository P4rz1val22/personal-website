import './Navbar.css';
import React from "react";

function NavBarButton({ name }) {
    return (
        <div className='navBarButton'>
            {name}
        </div>
    );
}

export default function Navbar() {
    return (
        <div className='navBar'>
            <NavBarButton name={'HOME'} />
            <NavBarButton name={'WORK'} />
            <div className='circle' />
            <NavBarButton name={'SKILLS'} />
            <NavBarButton name={'PROJECTS'} />
        </div>
    );
}
