import * as React from 'react';
import * as style from './style.css';

import { Card, Divider } from 'semantic-ui-react';

export class RawMaterialStock extends React.Component {

  render() {
    return (
      <div>
        <Card.Group itemsPerRow={2}>
          <Card fluid className={style.cardRed}>
            <Card.Content>
              <Card.Header>Stock akan habis</Card.Header>
              <Card.Meta>Co-Worker</Card.Meta>
              <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
            </Card.Content>
          </Card>

          <Card fluid>
            <Card.Content>
              <Card.Header content='Stock Habis' />
              <Card.Meta content='Musicians' />
              <Card.Description content='Jake is a drummer living in New York.' />
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider hidden />
      </div>
    );
  }
}
