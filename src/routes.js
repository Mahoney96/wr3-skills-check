import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

export default (
    <Switch>
        <Route  path ='/' component={Dashboard} />
        <Route Path= '/' component= />
        <Route />
        <Route />
    </Switch>
);



