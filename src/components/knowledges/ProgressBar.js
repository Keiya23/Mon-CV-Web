import React from 'react';

const ProgressBar = (props) => {



    return (
        <div>
            <h3>{props.title}</h3>
            <div className='stars'>

                {/* Création de mes 5 spans étoiles */}

                <span>Nombre étoiles</span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
            </div>

            <div>
                {

                    // Pour chaque id d'objet, afficher sa value ainsi que sa progressBar calculée en pourcentage

                    props.languages.map((item) => {
                        let stars = 5;
                        let progressBar = item.stars / stars * 100 + '%';
                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className='progressBar' style={{width:progressBar}}>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;