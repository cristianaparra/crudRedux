import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
            <div className='container'>
                <h1>
                    <Link className='text-light' to={'/'}>
                        Crus reacrt, rst api y axios
                    </Link>
                </h1>
            </div>
            <Link className='btn btn-danger nuevo-post d-block d-md-inline-block' to='/productos/nuevo'>
                agregar productos &#43;
            </Link>
        </nav>
    );
}

export default Header;