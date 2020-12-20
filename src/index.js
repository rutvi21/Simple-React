// Other Imports
import './index.css';
import * as serviceWorker from './serviceWorker';

// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './React_Components/App';

// Redux Imports
import { Provider } from 'react-redux';
import { store } from './Redux/store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
