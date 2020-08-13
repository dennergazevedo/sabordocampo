/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Title,
    Subtitle,
    ListOrders,
    Back,
    PaginationControl,
    Search,
    CleanFilter
} from './styles';

// COMPONENTS
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Item from './Item';
import Pagination from '@material-ui/core/TablePagination';

// SERVICES
import api from '../../../services/api';
import { toast } from 'react-toastify';

// ICONS
import {
    FaArrowLeft,
    FaSearch
} from 'react-icons/fa';

function Orders() {

    const [orders, setOrders] = useState(new Map());
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [email, setEmail] = useState('');

    async function loadOrders(page){
        try{
            const response = await api.get(`search_page_orders/${page}/${rowsPerPage}`);
            setOrders(response.data);
            const npage = await api.get('search_pageorder_results');
            setCount(npage.data);
        }catch(err){
            loadOrders();
        }
    }

    async function handleSearch(){
        try{
            setOrders(new Map());
            const response = await api.get(`search_by_email/${email}`);
            setOrders(response.data);
            setCount(0);
        }catch(err){
            toast.error('Falha ao localizar pedidos', { position: 'bottom-center' });
        }
    }

    function handleCleanFilter(){
        setOrders(new Map());
        setPage(0);
        setCount(0);
        setEmail('');
        loadOrders(0);
    }

    useEffect(()=>{
        loadOrders(page)
    }, [])

    useEffect(()=>{
        loadOrders(page)
    }, [rowsPerPage])

    // PAGINATION
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        setOrders(new Map());
        loadOrders(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

  return (
      <Container>
          <Navbar />
            <Body>
                <Title>
                    Pedidos
                </Title>
                <Subtitle>
                    Lista de todos os pedidos, finalizados e não finalizados.
                </Subtitle>

                <Search>
                    <input placeholder="Buscar por email" value={email} onChange={e => setEmail(e.target.value)} type="text" />
                    <button onClick={handleSearch}><FaSearch /></button>
                </Search>

                <CleanFilter onClick={handleCleanFilter}>Limpar Filtros</CleanFilter>

                <ListOrders>
                    {[...orders.keys()].map(id => (
                        <Item key={id} order={orders[id]} />
                    ))}
                </ListOrders>

                <PaginationControl>
                    <Pagination
                        component="div"
                        count={count}
                        page={page}
                        onChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        labelRowsPerPage="Linhas por página"
                        nextIconButtonText="Próxima página"
                        backIconButtonText="Página anterior"
                    />
                </PaginationControl>

                <Back onClick={() => window.history.back()}>
                    <FaArrowLeft style={{marginRight:'5px'}}/>
                    Voltar
                </Back>
            </Body>
          <Footer />
      </Container>
  );
}

export default Orders;