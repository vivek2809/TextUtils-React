import React from 'react'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}>
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item me-3">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className='nav-item me-3'>
                            <a className='nav-link' href='/'>Conatct us</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} for="flexSwitchCheckDefault">{props.mode==='light'?'dark':'light'}Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
