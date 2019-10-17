import React from 'react';

import { Link } from 'react-router-dom'

const Menu = function () {

    return ( 
      
    <div className = "wrapper__menu close"> 
      <div className="menu">
        <div className="left"></div>
        <div className="right"></div>
        <ul>
          <Link to="/">
            <li >Accueil</li>
          </Link>
            <li>Projets</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
              
          
      
    )
}

export default Menu;