import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {

    // Stockage des différents langages dans mon state ainsi que selection par défault du langage JS. projects appelle portfolioData
    state = {
        projects:portfolioData,
        radios: [
            {id: 1, value: "javascript"},
            {id: 2, value: "html"},
            {id: 3, value: "css"},
            {id: 4, value: "react"},
        ],
        selectedRadio: 'javascript'
    };

    handleRadio = (e) => {
        // Change l'état de la radio suivant la radio selectionnée
        let radio = e.target.value;
        this.setState({selectedRadio: radio})
    }

    render() {
        let {projects, radios, selectedRadio} = this.state;
        return (
            <div className='portfolioContent'>
                <ul className='radioDisplay'>
                    {
                        // Affiche ma liste de langages avec possibilité de modifier la radio selectionnée
                        radios.map((radio) => {
                            return (
                                
                                <li key={radio.id}>
                                    <input 
                                    type="radio" 
                                    name='radio' 
                                    checked={radio.value === selectedRadio} 
                                    value={radio.value} 
                                    id={radio.value}
                                    onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='projects'>
                    {
                        // Récupère mon portfolioData, et pour chaque id, affiche l'item et apelle le component Project
                        projects
                        .filter(item => item.languages.includes(selectedRadio))
                        .map(item => {
                            return (
                                <Project 
                                    key={item.id} 
                                    item={item}                          
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;