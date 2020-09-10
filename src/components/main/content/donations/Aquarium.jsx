import React, {useState, useEffect} from 'react';
import './aquarium.scss';
import DummyList from '../../DummyList';
import IconContainer from './IconContainer';

function Aquarium() {
    return (
        <div className="aquarium">
            {DummyList.map((e, index) => (
                <IconContainer
                    imgURL={e.pictureURL}
                    name={e.name}
                    tipAmount={e.tipAmount}
                    key={e.name}
                    index={index}
                />
            ))}
            <h1 className="aquariumHeader">Supporter</h1>
        </div>
    );
}

export default Aquarium;
