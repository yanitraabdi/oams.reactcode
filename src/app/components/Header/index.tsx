import * as React from 'react'
import { Label, Menu } from 'semantic-ui-react'

export class Header extends React.Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (name: any) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='mini'>
        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
          <Label color='teal'>1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Spam
        </Menu.Item>

        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick} position='right'>
          <Label>1</Label>
          Updates
        </Menu.Item>
      </Menu>
    )
  }
}