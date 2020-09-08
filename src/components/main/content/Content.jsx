import React, { PureComponent } from 'react';
import './content.scss';
import Donations from './donations/Donations';
import Footer from './footer/Footer';

class Content extends PureComponent {
    constructor() {
        super();
        this.state = {
            isDonationMode: false,
        };
    }

    render() {
        return (
            <div className="container">
                {this.state.isDonationMode
                    ? <Donations/>
                    : <Footer/>}
            </div>
        );
    }
}

export default Content;
