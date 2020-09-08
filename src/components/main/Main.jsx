import React, { PureComponent } from 'react';
import './main.scss';
import Content from './content/Content';

class Main extends PureComponent {
    render() {
        return (
            <div className="container">
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
