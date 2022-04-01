
let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        //GET/categories
        //const res = await fetch(BASE+'/categories');// faz a requisição
        //const json = await res.json(); // transforma em json
        //return json;
        return (await fetch(BASE + '/categories')).json();
    },

    getProducts: async (category, page, search) => { // recebe os parãmetros de busca
    const queryString = new URLSearchParams({ // imbute na url "função do javascript"
        category: category !== 0 ? category : '', // se for != de zero
        page: page > 0 ? page : '',               // se for > que zero
        search: search !== '' ? search : '',      // se for != de vazio
    });
    return (await fetch(BASE + '/products?' + queryString)).json();
    
    }

};
