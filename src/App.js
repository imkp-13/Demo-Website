import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
const App = () => {
    return(
        <Fragment>
            <Navbar />
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/about" component={ About } exact />
                <Route path="/service" component={ Service } exact />
                <Route path="/contact" component={ Contact } exact />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    );
};

export default App;
