import * as React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react'

export class InventoryTopMenu extends React.Component {
    state = { activeItem: 'product' }

    handleItemClick = (name:any) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='product'
                        as={Link} 
                        to='/inventory/product'
                        active={activeItem === 'product'}
                        onClick={this.handleItemClick} >
                        Produk 
                    </Menu.Item>
                    <Menu.Item
                        name='raw-material'
                        as={Link} 
                        to='/inventory/raw-material'
                        active={activeItem === 'raw-material'}
                        onClick={this.handleItemClick} >
                        Bahan Penolong 
                    </Menu.Item>
                    <Menu.Item
                        name='gallon'
                        as={Link}                         
                        to='/inventory/gallon'
                        active={activeItem === 'gallon'}
                        onClick={this.handleItemClick} >
                        Galon 
                    </Menu.Item>
                </Menu>
            </div>
        );
  }
}
