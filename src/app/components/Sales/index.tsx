import * as React from 'react';
import * as style from './style.css';

import { SalesMainContent } from 'app/components/Sales/SalesMainContent';
import { SalesTopMenu } from 'app/components/Sales/SalesTopMenu';

export class Sales extends React.Component {

  render() {
    return (
      <div>
        <div className={style.topmenu}>
          <SalesTopMenu />
        </div>
        <SalesMainContent />
      </div>
    );
  }
}
