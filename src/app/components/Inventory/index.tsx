import * as React from 'react';
import * as style from './style.css';

import { InventoryMainContent } from 'app/components/Inventory/InventoryMainContent';
import { InventoryTopMenu } from 'app/components/Inventory/InventoryTopMenu';

export class Inventory extends React.Component {

  render() {
    return (
      <div>
        <div className={style.topmenu}>
          <InventoryTopMenu />
        </div>
        <InventoryMainContent />
      </div>
    );
  }
}
