import React from 'react';

import {Card} from '../card/card.component';

import  './card-container.style.css';

export const CardContainer = (props) => (
    <div className='card-container'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);