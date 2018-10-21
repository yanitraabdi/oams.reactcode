import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CustomerList } from 'app/components/Customer/CustomerList';
import { CustomerDetail } from 'app/components/Customer/CustomerDetail';

export class Customer extends React.Component {

  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={CustomerList} />
            <Route path="/customer" component={CustomerList} />
            <Route path="/customer/:id" component={CustomerDetail} />
        </Switch>
      </div>
    );
  }
}
