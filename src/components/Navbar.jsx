import React from 'react'
import '../App.css'
const Navbar=()=>{

    return(
    <>

    <nav class="navbar navbar-light bg-dark navbar-expand-sm fixed-top  ">
    
        <div className="container d-flex justyfi-content-between">
            <div>
        <img src="	https://explorer.forta.network/forta_explorer_logo.svg " className='img-fluid containers' alt="" />
        
        </div>
        <div>
        <div className='collapse navbar-collapse ml-auto' id='mynavbar'>
            <ul className='navbar-nav text-white ml-auto'>
                    <li className='nav-link text-white active' >Bot Search</li>
                    <li className='nav-link text-white'>Alerts</li>
                    <li className='nav-link text-white'>Networks</li>
                    <li className='nav-link text-white font-lg'>|</li>
                    <li className='nav-link text-white'>Forta App &nbsp;<i class="bi bi-box-arrow-up-right"></i> </li>
                    
            </ul>
            <button className='rounded-pill nav-btn btn mt-1'><h4 className='navbtn-txt'>Subscribe to alert</h4></button>
            </div>
            </div>
        <button className="navbar-toggler d-md-none" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" 
       ><i class="bi bi-list text-light"></i></button>
        </div>    
    </nav>
    </>
    )
}
export default Navbar;