import React from 'react';
//Basicamente, este hook te dá acesso a history do objetos e você tem acesso a diversas funções para navegar na sua página.
import { Route , useHistory } from 'react-router-dom';
//useSelector é uma função que recebe o estado atual como um argumento e retorna os dados que você deseja dele.
import { useSelector } from 'react-redux';

export default ({ children, ...rest}) =>{
    const history  = useHistory();
    const token = useSelector(state => state.user.token);// token recebe o token do usuário logado

    if(!token || token === '') { // se o token for vazio ou indefinido envia para a tela de login
        history.push('/login');
        return null;
    }

    return <Route {...rest}>{children}</Route>;// clone do route
}