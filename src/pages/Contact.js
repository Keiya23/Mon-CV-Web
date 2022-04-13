import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'>

                </div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Bolbec</span>
                        </li>
                        <li>
                            {/* Affichage du téléphone ainsi que le mail pouvant être cliqués pour etre copiés grace a copytoclipboard */}
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text='0681945929'>
                                <span className='clickInput' onClick={() => {
                                    alert('Téléphone copié !')
                                }}>06 81 94 59 29</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className='far fa-envelope'></i>
                            <CopyToClipboard text='lamberttessier@gmail.com'>
                                <span className='clickInput' onClick={() => {
                                    alert('Email copié !')
                                }}>lamberttessier@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                        <li></li>
                    </ul>
                </div>
                
                {/* Lien vers 4 réseaux sociaux */}
                <div className='socialNetwork'>
                    <ul>
                        <a href='https://www.linkedin.com/in/lambert-tessier' target='_blank' rel='noopener noreferrer'>
                            <h4>Linkedin</h4>
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href='https://github.com/Keiya23' target='_blank' rel='noopener noreferrer'>
                            <h4>Github</h4>
                            <i className='fab fa-github'></i>
                        </a>
                        <a href='https://codepen.io/' target='_blank' rel='noopener noreferrer'>
                            <h4>Codepen</h4>
                            <i className='fab fa-codepen'></i>
                        </a>
                        <a href='https://www.facebook.com/nain.portequoi.5/' target='_blank' rel='noopener noreferrer'>
                            <h4>Facebook</h4>
                            <i className='fab fa-facebook'></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;