import  React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar=(props)=>{
    return(
        
            <nav className="wrapper grey darken-4 ">
            <div className="container ">
                <a  className="brand-logo red-text">My Contacts</a>
                <ul className="right">
                    <li ><Link to="/home">Home</Link></li>
                    <li ><Link to="/Addcontacts"><button className='btn-primary btn-lg'>+Add Contact</button></Link></li>
                    
                </ul>
                
            </div>
            
            </nav>
    )
}

export default withRouter(Navbar);