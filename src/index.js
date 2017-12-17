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

=======
>>>>>>> 2f17bd380b0076ca2eb94e48509a37c2acbe66ab
    <Router >
        <Route path="/"  render={(props)=>{
            return (<App location={props.location} store={store}/>)
        }} />
    </Router>
</Provider>
, document.getElementById('root'));
// registerServiceWorker();
