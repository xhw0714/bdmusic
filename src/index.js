import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/index.css';
import App from './common/App';
import './common/dpr'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
