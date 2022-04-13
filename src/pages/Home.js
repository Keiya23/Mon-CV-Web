import React from 'react';
import Navigation from '../components/Navigation';


// Page Home avec affichage du nom, titre et d'un lien pour télécharger le CV en pdf

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <div className='content'>
                    <h1>Lambert TESSIER</h1>
                    <h2>Développeur web junior</h2>
                    <div className='pdf'>
                        <a href='./media/CV Webdev.pdf'>Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;