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
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                    </div>
                    <div className="qr">
                        <img src="https://tappqa.tobit.com/training/2020/RB/images/qrCode.png" alt="" className="image"/>
                    </div>
                </div>
                <Aquarium/>
            </div>
        );
    }
}

export default Donations;
