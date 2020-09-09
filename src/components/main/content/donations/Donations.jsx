import React, { PureComponent } from 'react';
import Aquarium from './Aquarium';
import './donations.scss';

class Donations extends PureComponent {
    constructor() {
        super();
        this.state = {
            funfact: [
                'Thomas Mayer kann mit seinem Daumen 2500kg heben.',
                'Thomas Mayer wurde in einem Stall geboren, den er selbst gebaut hat.',
            ],
            number: 0,
            interval: {},
        };
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(this.getNumber(), 240000),
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    getNumber() {
        this.setState({
            number: Math.floor(Math.random() * this.state.funfact.length),
        });
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="artist">
                        <h1>Thomas Mayer</h1>
                        {/* eslint-disable-next-line max-len */}
                        <p>Wusstest du schon?</p>
                        {this.state.funfact[this.state.number]}
                    </div>
                    <div className="qr">
                        <img src="https://tappqa.tobit.com/training/2020/RB/images/qrCode.png" alt="" className="image" />
                    </div>
                    <div className="position">
                        <div className="splashtext">Trinkgeld</div>
                    </div>
                </div>
                <Aquarium />
            </div>
        );
    }
}

export default Donations;
