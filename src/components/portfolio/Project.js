import React, { Component } from 'react';

class Project extends Component {

    // State par défaut ou chaque information est cachée
    state = {
        showInfo: false
    }

    // Modifie le state pour montrer les infos
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        // recupere les attributs de mes langages
        let {name, languagesIcons, source, info, picture} = this.props.item;

        return (
            <div className='project'>
                <div className='icons'>
                    {/* Récupère ma liste languagesIcons et affiche les icones en prenant la classname */}
                    {languagesIcons.map(icon => 
                        <i className={icon} key={icon}></i>
                    )}
                </div>
                {/* Affichage du nom. Possibilité d'afficher les infos avec handleInfo en cliquant soit sur l'image soit le span + */}
                <h3>{name}</h3>
                <img src={picture} alt='' onClick={this.handleInfo}/>
                <span className='infos' onClick={this.handleInfo}>
                    <i className='fa fa-plus-circle'></i>
                </span>

                {
                    // Lien menant vvers le code source du programme ainsi qu'un lien permeterrant de faire un retour
                    this.state.showInfo && (
                        <div className='showInfos'>
                            <div className='infosContent'>
                                <div className='head'>
                                    <h2>{name}</h2>
                                    <div className='sourceCode'>
                                        <a href={source} rel='noopener noreferrer' className='button' target='_blank'>Source</a>
                                    </div>
                                </div>
                                <p className='text'>{info}</p>
                                <div className='button return' onClick={this.handleInfo}>
                                    Retourner sur la page
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Project;