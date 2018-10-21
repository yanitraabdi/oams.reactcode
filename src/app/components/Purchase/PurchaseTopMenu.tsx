import * as React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react'

export class PurchaseTopMenu extends React.Component {

  render() {
    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item
                    name='Daftar Pembelian'
                    as={Link} 
                    to='/purchase/list'
                />
                <Menu.Item
                    name='Order Pembelian'
                    as={Link} 
                    to='/purchase/order'
                />
                <Menu.Item
                    name='Faktur Pembelian'
                    as={Link} 
                    to='/purchase/invoice'
                />
                <Menu.Item
                    name='Pembayaran Pembelian'
                    as={Link} 
                    to='/purchase/receipt'
                />
                <Menu.Item
                    name='Retur Pembelian'
                    as={Link} 
                    to='/purchase/return'
                />
            </Menu>
        </div>
    );
  }
}
