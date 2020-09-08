import React, { PureComponent } from 'react';
import './footer.scss';
import Donator from './donator/Donator';
import dummyList from './.../DummyList';

class Footer extends PureComponent {
    render() {
        return (
            <div className="footer">
                <div className="intro">
                    <h1>Trinkgeld</h1>
                    <p>Thomas Mayer</p>
                </div>
                <div className="supporter">
                    <p>letzte Supporter</p>
                    <div className="list">
                        <Donator/>
                        <Donator/>
                        <Donator/>
                        <Donator/>
                    </div>
                </div>
                <div className="qr">
                    <img src="https://tappqa.tobit.com/training/2020/RB/images/qrCode.png" alt="" className="image"/>
                </div>
            </div>
        );
    }
}

export default Footer;
