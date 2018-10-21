import * as React from 'react';
import * as style from './style.css';

import { PurchaseMainContent } from 'app/components/Purchase/PurchaseMainContent';
import { PurchaseTopMenu } from 'app/components/Purchase/PurchaseTopMenu';

export class Purchase extends React.Component {

  render() {
    return (
      <div>
        <div className={style.topmenu}>
          <PurchaseTopMenu />
        </div>
        <PurchaseMainContent />
      </div>
    );
  }
}
