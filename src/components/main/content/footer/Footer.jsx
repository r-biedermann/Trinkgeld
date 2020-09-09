import React, { PureComponent } from 'react';
import './footer.scss';
import Donator from './donator/Donator';
import dummyList from '../../DummyList';

class Footer extends PureComponent {
    constructor() {
        super();
        this.state = {
            dummy1: {},
            dummy2: {},
            dummy3: {},
            dummy4: {},
        };
    }

    componentDidMount() {
        const index = [];
        for (let i = 0; i < dummyList.length; i++) {
            index.push(i);
        }
        let rndm = this.getRndm(index.length);
        const d1 = index[rndm];
        index.splice(rndm, 1);
        rndm = this.getRndm(index.length);
        const d2 = index[rndm];
        index.splice(rndm, 1);
        rndm = this.getRndm(index.length);
        const d3 = index[rndm];
        index.splice(rndm, 1);
        rndm = this.getRndm(index.length);
        const d4 = index[rndm];
        index.splice(rndm, 1);
        this.setState({
            dummy1: dummyList[d1],
            dummy2: dummyList[d2],
            dummy3: dummyList[d3],
            dummy4: dummyList[d4],
        });
    }

    // eslint-disable-next-line class-methods-use-this
    getRndm(i) {
        return Math.floor(Math.random() * i);
    }

    render() {
        return (
            <div>
                <div className="top"/>
                <div className="footer">
                    <div className="intro">
                        <h1>Trinkgeld</h1>
                        <p>Thomas Mayer</p>
                    </div>
                    <div className="supporter">
                        <p>letzte Supporter</p>
                        <div className="list">
                            <Donator data={this.state.dummy1}/>
                            <Donator data={this.state.dummy2}/>
                            <Donator data={this.state.dummy3}/>
                            <Donator data={this.state.dummy4}/>
                        </div>
                    </div>
                    <div className="qr">
                        <img src="https://tappqa.tobit.com/training/2020/RB/images/qrCode.png" alt="" className="image"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
