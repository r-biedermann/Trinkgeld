import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';

// Components
import Main from './main/Main';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <>
                <Main/>
            </>
        );
    }
}

export default App;
export const HotApp = hot(App);
