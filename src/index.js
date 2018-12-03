import { AppContainer, hot } from 'react-hot-loader';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import "./assets/styles/styles.scss"
export default hot(module)(App)
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
module.hot.accept();
// Webpack Hot Module Replacement API
// if (module.hot) module.hot.accept('./components/App', () => render(App));

