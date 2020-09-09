import React, { PureComponent } from 'react';
import './content.scss';
import Donations from './donations/Donations';
import Footer from './footer/Footer';

class Content extends PureComponent {
    render() {
        return (
            <div className="diashow">
                <figure className="page1">
                    <Donations/>
                </figure>
                <figure className="page2">
                    <Footer/>
                </figure>
            </div>
        );
    }
}

export default Content;
