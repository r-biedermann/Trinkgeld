import React from 'react';
import './donator.scss';

function Donator(props) {
    return (
        <div className="container">
            <div className="img" style={{ backgroundImage: `url(${props.data.pictureURL})` }}/>
            <div className="info">
                <p>{props.data.name}</p>
                <p>{`£ ${parseFloat(props.data.tipAmount).toFixed(2)}`}</p>
            </div>
        </div>
    );
}

export default Donator;
