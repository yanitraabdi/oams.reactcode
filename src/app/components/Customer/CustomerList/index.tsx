import * as React from 'react';
import { CustomerTransaction } from 'app/components/Customer/CustomerList/CustomerTransaction';
import { CustomerGrid } from 'app/components/Customer/CustomerList/CustomerGrid';
import { CustomerFilter } from 'app/components/Customer/CustomerList/CustomerFilter';

import { Button, Grid, Icon } from 'semantic-ui-react';

export class CustomerList extends React.Component {

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column floated='left' width={5}>
            <h2>
              Pelanggan
            </h2>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Button floated='right' color='green' icon labelPosition='left' size='small'>
              <Icon name='plus' />
              Tambah Pelanggan
            </Button>
          </Grid.Column>
        </Grid>
        <CustomerTransaction />
        <CustomerFilter/>
        <CustomerGrid/>
      </div>
    );
  }
}
