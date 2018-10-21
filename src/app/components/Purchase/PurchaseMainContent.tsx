import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PurchaseList } from 'app/components/Purchase/PurchaseList';
import { PurchaseInvoice } from 'app/components/Purchase/PurchaseInvoice';
import { PurchaseOrder } from 'app/components/Purchase/PurchaseOrder';
import { PurchaseReceipt } from 'app/components/Purchase/PurchaseReceipt';
import { PurchaseReturn } from 'app/components/Purchase/PurchaseReturn';

export class PurchaseMainContent extends React.Component {

  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={PurchaseList} />
            <Route path="/purchase/list" component={PurchaseList} />
            <Route path="/purchase/order" component={PurchaseOrder} />
            <Route path="/purchase/invoice" component={PurchaseInvoice} />
            <Route path="/purchase/receipt" component={PurchaseReceipt} />
            <Route path="/purchase/return" component={PurchaseReturn} />
        </Switch>
      </div>
    );
  }
}
