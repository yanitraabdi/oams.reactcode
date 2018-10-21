import * as React from 'react';
import { ProductStock } from 'app/components/Inventory/Product/ProductStock';
import { ProductGrid } from 'app/components/Inventory/Product/ProductGrid';
import { ProductFilter } from 'app/components/Inventory/Product/ProductFilter';

import { Button, Grid, Icon } from 'semantic-ui-react';

export class Product extends React.Component {

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column floated='left' width={5}>
            <h2>
              Produk
            </h2>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Button floated='right' color='green' icon labelPosition='left'>
              <Icon name='plus' />
              Tambah Bahan Penolong
            </Button>
          </Grid.Column>
        </Grid>
        <ProductStock />
        <ProductFilter/>
        <ProductGrid/>
      </div>
    );
  }
}
