import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/index.css';
import App from './common/App';
import './common/dpr'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
<Router>
    <App />
</Router>
, document.getElementById('root'));
registerServiceWorker();
