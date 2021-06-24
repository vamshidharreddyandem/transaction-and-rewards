import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';

import HomePage from './HomePage';
import TransactionsPage from './transactions/TransactionPage';

const RouteMain = () => {
    return (
        <Switch>
            <Route path="/transactions">
                <TransactionsPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
            <Route render={() => <Redirect to="/transactions" />} />
        </Switch>);
};

export default RouteMain;