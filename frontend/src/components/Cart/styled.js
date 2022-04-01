import styled from 'styled-components';

export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 0;
    right: 30px;
`;

export const CartHeader = styled.div`
    width: 290px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
`;
export const CartIcon = styled.img`
    margin-left:20px;
    margin-right:20px;
    width:24px;
    height:24px;

`;
export const CartText = styled.div`
    flex: 1;
    color:#FFF;
    font-size:17px;
    margin-right:30px;
`;
export const CartBody = styled.div`
    display: ${props=>props.show ? 'block' : 'none'};
    color: #FFF;
`;

export const ProductsArea = styled.div`

`;

export const ProductPhoto = styled.img`
    width: 64px;
    height:auto;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex:1;
    margin-left:10px;
`;

export const ProductItem = styled.div`
    display: flex;
    margin:10px;
`;


export const ProductName = styled.div`
    font-size:15px;
    font-weight:bold;
`;
export const ProductPrice = styled.div`
    font-size:15px; 
`;

export const ProductQtdArea = styled.div``;