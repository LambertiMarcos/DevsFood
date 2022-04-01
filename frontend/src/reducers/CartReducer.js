/* eslint-disable default-case */
const initialState = {
    products:[],
    address:[],
    discount:0,
    delivery:0
};

export default (state = initialState, action) => {

    switch(action.type) {
        case "ADD_PRODUCT":
            let products = [...state.products];
            let id = action.payload.data.id; // id do produto procurado
        
            let index = products.findIndex(item => item.id === id);// verifica se já tem o produto
            if (index > -1) { 
                products[index].qt += action.payload.qt; // aumenta a qtd do produto existente
            } else {
                products.push({ // insere o produto no carrinho
                    ...action.payload.data,
                    qt: action.payload.qt
                });
            }
            console.log(products);

            return {...state, products};
            
    }
    return state;
}
