import React from 'react';
import './List.scss';

const List = () => {
    return (
        <div className='list'>
            <h2 className='list__title'>List Items</h2>
            <div className='list__container'>
                <p>Task: </p>
                <p>Assigned to: </p>
                <p>Difficulty: </p>
                <p>Complete: </p>
            </div>
        </div>
    )
}

export default List