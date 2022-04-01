import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { 
    Container, 
    CategoryArea, 
    CategoryList,
    ProductArea,
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem
    } from './styled';
import ReactTolltip from 'react-tooltip';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let searchTimer = null;

export default (search) => {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [headerSearch, setHeaderSearch] = useState('');
    const [totalPages, setTotalPages] = useState(0);

    const [modelStatus, setModalStatus] = useState(true);
    const [modalData, setModalData] = useState({});

    const [activeSearch, setActiveSearch] = useState('');
    const [activeCategory, setActiveCategory]= useState(0);
    const [activePage, setActivePage] = useState(0);

// Carrega as informações dos produtos
    const getProducts = async () => {
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);
        if (prods.error === '') {
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);// preenche o total de páginas
            setActivePage(prods.result.page);
        }
        
    }

// Faz o carregamento das categorias ao abrir a página
    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            if (cat.error === '') {
                setCategories(cat.result);
            }
            ReactTolltip.rebuild(); // aparece a categoria depois que a tela é recarregada
        };
        getCategories();
    }, []);

// monitora o activeCategory para fazer o carregamento dos produtos da categoria
    useEffect(()=> { 
        setProducts([]); // limpa o array
        getProducts(); // carrega os produtos
    }, [activeCategory, activePage, activeSearch]);

// Monitora o headerSearch
    useEffect(()=> {
        clearTimeout(searchTimer); // limpa o timer que está rodando, para rodar uma vez só
        searchTimer = setTimeout(()=>{ // inicia uma contagem de 2s
            setActiveSearch(headerSearch); // faz a busca
        },2000)
    }, [headerSearch]); 

// Monitora o Modal
    useEffect (()=>{
        setModalStatus(false);
    },[])

    const handleProductClick = (data)=>{
        setModalData(data); // repassa as informações 
        setModalStatus(true); // mostra o modal
    }


// Faz o carregamento dos produtos | busca | mudar categoria | paginar | carregar página
    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 &&
            <>
                <CategoryArea>
                    Selecione uma categoria ({activeCategory})
                    <CategoryList>
                        <CategoryItem 
                        data={{
                            id:0,
                            name:'Todas as categorias',
                            image:'/assets/food-and-restaurant.png'
                        }}
                        activeCategory={activeCategory}// armazena o id da categoria ativa
                        setActiveCategory={setActiveCategory} // troca a categoria
                        />
                        {categories.map((item, index)=>( // pega da url que vem o webservice
                            <CategoryItem
                                key={index} 
                                data={item}
                                activeCategory={activeCategory} 
                                setActiveCategory={setActiveCategory} // troca a categoria
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>
            </>
            }
            {products.length > 0 && 
            <ProductArea>
                <ProductList>
                    {products.map((item, index)=>(
                        <ProductItem
                            key={index}
                            data={item}
                            onClick={handleProductClick}
                        />
                    ))}
                </ProductList>
            </ProductArea>
            }
            Total: {totalPages}
            {totalPages > 0 && 
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, index)=>( // trocar o 8 por totalPages
                        <ProductPaginationItem 
                        key={index} 
                        active={activePage} // página ativa
                        current={index + 1} // índice de exibição
                        onClick={()=>setTotalPages(index+1)}
                        >
                            {index + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }

            <Modal status={modelStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus} />
            </Modal>
        </Container>
    );
}
