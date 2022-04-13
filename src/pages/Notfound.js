import React from 'react';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='notFound'>
            <div className='notFoundContent'>
                {/* En cas d'erreur dans l'écriture du lien, possibilité de retourner sur Home */}
                <h3>Désolé cette page n'existe pas</h3>
                <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "navActive" : "non"
                        }
                    >
                        <i className='fa fa-home'></i>
                        <span> Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Notfound;