import React, { PureComponent } from 'react';
import Aquarium from './Aquarium';
import './donations.scss';

class Donations extends PureComponent {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="artist">
                        <h1>Thomas Mayer</h1>
                    </div>
                    <div className="qr">
                        <img src="https://tappqa.tobit.com/training/2020/RB/images/qrCode.png" alt="" className="image"/>
                    </div>
                    <div className="position">
                        <div className="splashtext">Trinkgeld</div>
                    </div>
                </div>
                <Aquarium/>
            </div>
        );
    }
}

export default Donations;
