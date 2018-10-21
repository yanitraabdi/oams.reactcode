import * as React from 'react';
import * as style from './style.css';
import { Link } from 'react-router-dom';

import { Divider, Icon, Menu } from 'semantic-ui-react';

export namespace SideMenu {
    export interface Props {
        activeItem: string;
        handleItemClick: () => any;
    }
}

export class SideMenu extends React.Component<SideMenu.Props> {
    static defaultProps: Partial<SideMenu.Props> = {
        activeItem: 'home'
    };

    constructor(props: SideMenu.Props, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Menu secondary vertical fixed='left' className={style.sideMenu}>
                    <Menu.Item name='home' as={Link} to='/'>
                        <Icon name='dashboard' />
                        Beranda
            </Menu.Item>
                    <Divider fitted />
                    <Menu.Item name='bank' as={Link} to="/banks">
                        Bank
            </Menu.Item>
                    <Menu.Item name='inventory' as={Link} to="/inventory/product">
                        Persediaan
            </Menu.Item>
                    <Menu.Item name='customer' as={Link} to="/customer">
                    <Icon name='user' />
                        Pelanggan
            </Menu.Item>
                    <Menu.Item name='vendor' as={Link} to="/vendor">
                        Pemasok
            </Menu.Item>
                    <Menu.Item name='employee' as={Link} to="/employee">
                        Karyawan
            </Menu.Item>
                    <Divider fitted />
                    <Menu.Item name='sales' as={Link} to="/sales/list">
                        Penjualan
            </Menu.Item>
                    <Menu.Item name='purchase' as={Link} to="/purchase/list">
                        Pembelian
            </Menu.Item>
                    <Menu.Item name='manufacture' as={Link} to="/manufacture">
                        Pabrikasi
            </Menu.Item>
                    <Menu.Item name='machine' as={Link} to="/fetchdata">
                        Mesin
            </Menu.Item>
                    <Divider fitted />
                    <Menu.Item name='chart-of-account' as={Link} to="/chart-of-account">
                        Neraca Akun
            </Menu.Item>
                    <Menu.Item name='report' as={Link} to="/report">
                        Laporan
            </Menu.Item>
                </Menu>
            </div>
        )
    }
};