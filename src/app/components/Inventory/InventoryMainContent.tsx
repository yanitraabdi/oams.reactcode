import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { RawMaterial } from 'app/components/Inventory/RawMaterial';
import { Product } from 'app/components/Inventory/Product';

export class InventoryMainContent extends React.Component {

  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={Product} />
            <Route path="/inventory/raw-material" component={RawMaterial} />
            <Route path="/inventory/product" component={Product} />
        </Switch>
      </div>
    );
  }
}
