import React, { PureComponent } from 'react';
import './aquarium.scss';
import DummyList from '../../DummyList.jsx';
import IconContainer from './IconContainer.jsx';

function Aquarium() {
    return (
        <div className="aquarium">
            {DummyList.map((e) => (
                <IconContainer 
                    imgURL={e.pictureURL}
                    name={e.name}
                    tipAmount={e.tipAmount}
                    key={e.name}
                />
            ))}
        </div>
    );
}

export default Aquarium;
