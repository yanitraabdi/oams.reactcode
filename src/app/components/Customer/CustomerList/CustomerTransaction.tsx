import * as React from 'react';
//import * as style from './style.css';

import { Segment, Grid } from 'semantic-ui-react';

export class CustomerTransaction extends React.Component {

  render() {
    return (
      <div>
        <Grid divided='vertically' hidden>
            <Grid.Row columns={3}>
            <Grid.Column>
                <Segment.Group horizontal>
                    <Segment inverted color='teal'>Quotation</Segment>
                    <Segment inverted color='blue'>Order</Segment>
                </Segment.Group>
            </Grid.Column>
            <Grid.Column>
                <Segment.Group horizontal>
                    <Segment inverted color='orange'>Invoice Aktif</Segment>
                    <Segment inverted color='red'>Overdue</Segment>
                </Segment.Group>
            </Grid.Column>
            <Grid.Column>
                <Segment.Group horizontal>
                    <Segment inverted color='green'>Terbayar</Segment>
                </Segment.Group>
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  }
}
