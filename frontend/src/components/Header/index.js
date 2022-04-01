import React, { useState } from 'react';
import { Container, Logo , SearchInput} from './styled';

export default ( {search, onSearch }) =>{

    const [inputActive, setInputActive] = useState(search === '' ? false : true);

    const hadleInputFocus = () =>{ // quando tem informação
        setInputActive(true)
    }

    const handleInputBlur = () => { 
        if(search === '') {
            setInputActive(false)
        }
    }

    const handleChange = (e) => {
        onSearch(e.target.value);
    }

    return(
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput 
            type="text" 
            value={search}
            onChange={handleChange}
            placeholder="Digite o nome do produto"
            active={inputActive}
            onFocus={hadleInputFocus}
            onBlur={handleInputBlur}
            />
        </Container>
    );
}