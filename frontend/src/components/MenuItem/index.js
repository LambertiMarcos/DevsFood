import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { LinkArea, LinkIcon } from './styled';



export default ({ title, icon, link }) => {
    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname === link; // rota que está aberta

    const handleLinkClick = (e) => {
        e.preventDefault(); //nega o evento de click original
        history.push( link ); //usa o push para mandar para o link, sem atualizar toda a página.
    }

    return(
        <LinkArea data-tip={title} data-for="tip-right" active={isActive} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon} />
        </LinkArea>
    );
}