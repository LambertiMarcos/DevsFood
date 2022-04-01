import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { 
    Container,
    ProductArea,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductQuantity,
    ProductQtdImage,
    ProductQtdText,
    ProductPrice,
    ProductButtons,
    ProductName,
    ProductIngredients,
    ProductButton,

} from './styled';

export default ({data, setStatus})=>{

    const dispatch = useDispatch();
    const [qt, setQt] = useState(1);

    console.log(data);

    useEffect(()=>{
        setQt(1);
    },[data])

    const handleCancelButton = () => {
        setStatus(false);
    }
    const handeMinusQtd = () => {
        if(qt > 1) {
            setQt(qt - 1);
        }
    }
    const handePlusQtd = () => {
        setQt(qt + 1);
    }

    const handleAddToCart = () => {
    // juntar as informações, e mandar para o reducer.
        dispatch({
            type: 'ADD_PRODUCT',
            payload:{data, qt}
        });
    // fechar o modal
        setStatus(false);
    }

    return(
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtdImage onClick={handeMinusQtd} src="/assets/minus.png" />
                            <ProductQtdText>{qt}</ProductQtdText>
                            <ProductQtdImage onClick={handePlusQtd} src="/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * qt).toFixed(2) }
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true}onClick={handleCancelButton} >Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}