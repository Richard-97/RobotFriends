import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './Containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './Reducers';

const store = createStore(searchRobots)

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>,document.getElementById('root'));
registerServiceWorker();
