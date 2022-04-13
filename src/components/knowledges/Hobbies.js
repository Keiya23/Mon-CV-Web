import React from 'react';


    // Différents hobbies avec une icone correspondant

const Hobbies = () => {
    return (
        
            <div className='hobbies'>
                <h3>Intérêts</h3>
                <ul>
                    <li className='hobby'>
                        <i className='fa fa-running'></i>
                        <span>Course à pied</span>
                    </li>
                    <li className='hobby'>
                        <i className='fa fa-table-tennis'></i>
                        <span>Tennis de table</span>
                    </li>
                    <li className='hobby'>
                        <i className='fas fa-book-reader'></i>
                        <span>Lecture</span>
                    </li>
                    <li className='hobby'>
                        <i className='fa fa-fish'></i>
                        <span>Pêche</span>
                    </li>
                    <li className='hobby'>
                        <i className='fa fa-plane-departure'></i>
                        <span>Voyages</span>
                    </li>
                </ul>
            </div>
        
    );
};

export default Hobbies;