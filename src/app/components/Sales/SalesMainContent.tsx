import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PurchaseList } from 'app/components/Purchase/PurchaseList';
import { PurchaseInvoice } from 'app/components/Purchase/PurchaseInvoice';
import { PurchaseOrder } from 'app/components/Purchase/PurchaseOrder';
import { PurchaseReturn } from 'app/components/Purchase/PurchaseReturn';

export class SalesMainContent extends React.Component {

  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={PurchaseList} />
            <Route path="/sales/list" component={PurchaseList} />
            <Route path="/sales/quotation" component={PurchaseOrder} />
            <Route path="/sales/order" component={PurchaseOrder} />
            <Route path="/sales/delivery" component={PurchaseOrder} />
            <Route path="/sales/invoice" component={PurchaseInvoice} />
            <Route path="/sales/receipt" component={PurchaseOrder} />
            <Route path="/sales/return" component={PurchaseReturn} />
        </Switch>
      </div>
    );
  }
}
