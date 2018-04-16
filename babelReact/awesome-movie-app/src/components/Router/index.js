import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../../layouts/App'
import Home from '../../views/Home'
import Movie from '../../views/Movie'
import Movies from '../../views/Movies'
import NotFound from '../../views/NotFound'

const Router = () => {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path='/movies/:id' component={Movie} />
                    <Route path='/movies' component={Movies} />
                    <Route path='/' exact component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </App>
        </BrowserRouter>
    );
}

export default Router;