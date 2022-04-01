import React from 'react';
import { Container, ModalBody } from './styled';

export default (({ status, setStatus, children }) => { // pega o status da tela e  para o container
// quando clicar fora do modal altera o valor do setStatus    
    const handleModalClick = (e) =>{
        //console.log(e.target); para saber onde foi clicado
        if(e.target.classList.contains('modalBg')){ // se clicou no elemento com a class modalBg
            setStatus(false);
        }
    }
    
    return(
        <Container 
        className="modalBg"
        status={status} 
        onClick={handleModalClick}>
            <ModalBody>
                {children} 
            </ModalBody>
        </Container>
    );
})