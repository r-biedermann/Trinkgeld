import React, { PureComponent } from 'react';
import './footer.scss';
import Donator from './Donator';

class Footer extends PureComponent {
    render() {
        return (
            <div className="footer">
                <div>
                    <h1>Trinkgeld</h1>
                    <p>Name</p>
                </div>
                <div className="list">
                    <Donator className="donator"/>
                    <Donator className="donator"/>
                    <Donator className="donator"/>
                    <Donator className="donator"/>
                </div>
            </div>
        );
    }
}

export default Footer;
