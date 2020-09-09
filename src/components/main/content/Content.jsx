import React, { PureComponent } from 'react';
import './content.scss';
import Donations from './donations/Donations';
import Footer from './footer/Footer';

class Content extends PureComponent {
    constructor() {
        super();
        this.state = {
            isDonationMode: false,
            interval: {},
        };
        this.changeMode.bind(this);
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(this.changeMode, 10000),
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    changeMode() {
        this.setState((prevState) => {
            return {
                isDonationMode: !prevState.isDonationMode,
            };
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.isDonationMode
                    ? <Donations />
                    : <Footer />}
            </div>
        );
    }
}

export default Content;
