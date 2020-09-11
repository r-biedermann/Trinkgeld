import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';

// Components
import Main from './main/Main';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            windowHeight: 900,
        };
    }

    componentDidMount() {
        const retVal = chayns.addWindowMetricsListener((e) => {
            if (e !== this.state.windowHeight) {
                this.setState({ windowHeight: e });
            }
        }, true);
        return () => chayns.removeWindowMetricsListener(retVal);
    }

    render() {
        return (
            <div style={{ height: this.state.windowHeight }}>
                <Main/>
            </div>
        );
    }
}

export default App;
export const HotApp = hot(App);
