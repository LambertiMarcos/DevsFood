import styled from 'styled-components';

export const Container = styled.div`
    background-color: #136713;
    border-radius: 10px;
    padding:20px;
    display: Flex;
    align-items: center;
    justify-content: space-between;
`;


export const Logo = styled.img`
    width: auto;
    height:65px;
`;

export const SearchInput = styled.input`
    background-image: url('/assets/search.png');
    background-size: 25px;
    background-repeat: no-repeat;
    background-position: 7px center;
    border: 0;
    outline: none;
    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    border-radius: 25px;
    padding-left: 50px;
    cursor: pointer;
    transition: all ease 0.3s;
    font-size:15px;

    &:focus {
        cursor: text;
    }
`;