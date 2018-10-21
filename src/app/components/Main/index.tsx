import * as React from 'react';
import * as style from './style.css';
import { SideMenu, Header } from 'app/components';
import { Router } from 'app';

import { Container } from 'semantic-ui-react';

export class App extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <SideMenu />
                <div className={style.mainbody}>
                    <Container fluid>
                        <Router />
                    </Container>
                </div>
            </div>
        );
    }
}
