import 'react-toolbox/lib/commons.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from 'react-css-themr';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import store, { history } from './store';
import theme from './theme/theme';

import App from './bind';
import FAQ from './modules/faq/containers/index';
import Sections from './modules/sections/containers';

const router = (
    <ThemeProvider theme={theme}>
        <Provider store={ store }>
            <Router history={ history }>
                <Route path="/" component={ App }>
                <IndexRoute component={ FAQ }></IndexRoute>
                <Route path="/faq" component={ FAQ } />
                <Route path="/collapsible" component={ Sections } />
                </Route>
            </Router>
        </Provider>
    </ThemeProvider>
);


ReactDOM.render(router, document.getElementById('app'));
