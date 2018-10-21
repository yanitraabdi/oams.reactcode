import * as React from 'react';
import { RawMaterialStock } from 'app/components/Inventory/RawMaterial/RawMaterialStock';
import { RawMaterialGrid } from 'app/components/Inventory/RawMaterial/RawMaterialGrid';
import { RawMaterialFilter } from 'app/components/Inventory/RawMaterial/RawMaterialFilter';

import { Button, Grid, Icon } from 'semantic-ui-react';

export class RawMaterial extends React.Component {

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column floated='left' width={5}>
            <h2>
              Bahan Penolong
            </h2>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Button floated='right' color='green' icon labelPosition='left'>
              <Icon name='plus' />
              Tambah Bahan Penolong
            </Button>
          </Grid.Column>
        </Grid>
        <RawMaterialStock />
        <RawMaterialFilter/>
        <RawMaterialGrid/>
      </div>
    );
  }
}
