import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/index.css';
import App from './common/App';
// import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from "react-redux";
import reducer from "./reducer/index";
import {createStore} from "redux";

const store = createStore(reducer);


ReactDOM.render(
<Provider store={store}>
<<<<<<< HEAD
    <Router >
        <Route path="/"  render={(props)=>{
            return (<App location={props.location} store={store}/>)
        }} />
=======
    <Router>
        <Route path="/" component={App} />
>>>>>>> 60ed732f477da8bb7e5d1a8a0b52af94f3f4d277
    </Router>
</Provider>
, document.getElementById('root'));
// registerServiceWorker();
