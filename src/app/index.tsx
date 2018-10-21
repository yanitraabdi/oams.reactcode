import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
//import { App as MainApp } from 'app/containers/Todo';
import { hot } from 'react-hot-loader';
import { Customer } from 'app/components/Customer';
import { Inventory } from 'app/components/Inventory';
import { ChartOfAccount } from 'app/components/ChartOfAccount';
import { Purchase } from 'app/components/Purchase';
import { Sales } from 'app/components/Sales';

export const Router = hot(module)(() => (
    <Switch>
      <Route exact path="/" component={Customer} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/customer" component={Customer} />
      <Route path="/chart-of-account" component={ChartOfAccount} />
      <Route path="/purchase" component={Purchase} />
      <Route path="/sales" component={Sales} />
    </Switch>
));
