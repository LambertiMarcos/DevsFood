import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactTolltip from 'react-tooltip';

import { Container, Menu, PageBody } from './AppStyled';
import PrivateRoutes from './components/PrivateRoutes';

import MenuItem from './components/MenuItem';
import Cart  from './components/Cart';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Loja" icon="/assets/store.png" link="/" />
                    <MenuItem title="pedidos" icon="/assets/order.png" link="/orders" />
                    <MenuItem title="about" icon="/assets/profile.png" link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoutes  path="/orders">
                            <div>   TELA DE PEDIDOS  </div>
                        </PrivateRoutes>
                        <PrivateRoutes path="/profile">
                            <div>   TELA DE PERFIL  </div>
                        </PrivateRoutes>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart />
                <ReactTolltip id="tip-top" place="top" effect="solid" />
                <ReactTolltip id="tip-right" place="right" effect="solid" />
            </Container>


        </BrowserRouter>
    );
}