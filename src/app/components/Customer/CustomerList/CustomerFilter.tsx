import * as React from 'react';

import { Form, Button, Divider, Icon } from 'semantic-ui-react';


export class CustomerFilter extends React.Component {

  render() {
    return (
      <div>        
        <Button color='blue' icon labelPosition='left'>
              <Icon name='filter' />
              Filter
            </Button>
        <Form size='small' key='small'>
          <Form.Group widths='equal'>
            <Form.Field label='First name' control='input' placeholder='First name' />
            <Form.Field label='Last name' control='input' placeholder='Last name' />
          </Form.Group>
            <Button color='blue' icon labelPosition='left'>
              <Icon name='search' />
              Search
            </Button>
          <Divider hidden />
        </Form>
      </div>
    );
  }
}