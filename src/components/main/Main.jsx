import React, { PureComponent } from 'react';
import './main.scss';
import Content from './content/Content';

class Main extends PureComponent {
    constructor() {
        super();
        this.state = {
            windowHeight: 0,
        };
    }

    useWindowHeight() {
        const retVal = chayns.addWindowMetricsListener((e) => {
            if (e !== this.statewindowHeight) {
                this.setState({ windowHeight: e });
            }
        }, true);
        return () => chayns.removeWindowMetricsListener(retVal);
    }

    render() {
        return (
            <div
                className="container"
                style={{ height: `${this.state.windowHeight}` }}
            >
                <div className="background1 animation"/>
                <div className="background2 animation"/>
                <div className="background3 animation"/>
                <div className="background4 animation"/>
                <Content className="content"/>
            </div>
        );
    }
}

export default Main;
