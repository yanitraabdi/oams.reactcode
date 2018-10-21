import * as React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react'

export class SalesTopMenu extends React.Component {

  render() {
    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item
                    name='Daftar Penjualan'
                    as={Link} 
                    to='/sales/list'
                />
                <Menu.Item
                    name='Kuotasi Penjualan'
                    as={Link} 
                    to='/sales/quotation'
                />
                <Menu.Item
                    name='Order Penjualan'
                    as={Link} 
                    to='/sales/order'
                />
                <Menu.Item
                    name='Pengiriman Penjualan'
                    as={Link} 
                    to='/sales/delivery'
                />
                <Menu.Item
                    name='Faktur Penjualan'
                    as={Link} 
                    to='/sales/invoice'
                />
                <Menu.Item
                    name='Penerimaan Penjualan'
                    as={Link} 
                    to='/sales/receipt'
                />
                <Menu.Item
                    name='Retur Penjualan'
                    as={Link} 
                    to='/sales/return'
                />
            </Menu>
        </div>
    );
  }
}
