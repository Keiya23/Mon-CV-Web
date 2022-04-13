import React from 'react';
import { NavLink } from 'react-router-dom';

// Component Navigation appelé sur toutes mes pages

const Navigation = () => {

    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src='./media/profil.jpg' alt='profil'/>
                    <h3>Lambert TESSIER</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                    
                    {/* Recherche de la page active */}

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "navActive" : "non"
                        }
                    >
                            <i className="fa fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/competences'
                        className={({ isActive }) =>
                            isActive ? "navActive" : "non"
                        }
                        >
                            <i className="fa fa-black-tie"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/portfolio'
                        className={({ isActive }) =>
                            isActive ? "navActive" : "non"
                        }
                        >
                            <i className="fa fa-image"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/contact'
                        className={({ isActive }) =>
                            isActive ? "navActive" : "non"
                        }
                        >
                            <i className="fa fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/lambert-tessier' target="_blank" rel='noreferrer'><i className='fa fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href='https://github.com/Keiya23' target="_blank" rel='noreferrer'><i className='fa fa-github'></i></a>
                    </li>
                    <li>
                        <a href='https://www.codepen.io' target="_blank" rel='noreferrer'><i className='fa fa-codepen'></i></a>
                    </li>
                </ul>
            

                <div className='signature'>
                    <p>Un tit sushi</p>
                </div>

            </div>
            
        </div>
    );
};



export default Navigation;