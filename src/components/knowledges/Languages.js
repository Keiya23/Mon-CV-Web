import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {

    // Les différents langages et frameworks stockées dans un objet state

    state = {
        languages : [
            {id: 1, value: "Javascript", stars:4},
            {id: 2, value: "Css", stars:4},
            {id: 3, value: "Php", stars:5},
            {id: 4, value: "Java", stars:2}
        ],
        frameworks : [
            {id: 1, value: "React", stars:5},
            {id: 2, value: "Bootstrap", stars:4},
            {id: 3, value: "Sass", stars:5},
            {id: 4, value: "Angular", stars:3}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;

        // Rendu de mon state en faisant appel au component ProgressBar

        return (
            <div className='languagesFrameworks'>
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar 
                languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;