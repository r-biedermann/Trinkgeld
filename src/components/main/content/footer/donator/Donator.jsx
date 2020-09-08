import React, { PureComponent } from 'react';
import './donator.scss';

class Donator extends PureComponent {
    render() {
        return (
            <div className="container">
                <div className="img"/>
                <div className="info">
                    <p>Name</p>
                    <p>Betrag</p>
                </div>
            </div>
        );
    }
}

export default Donator;
