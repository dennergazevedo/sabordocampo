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
    PaginationControl
} from './styles';

// COMPONENTS
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Item from './Item';
import Pagination from '@material-ui/core/TablePagination';

// SERVICES
import api from '../../../services/api';

// ICONS
import {
    FaArrowLeft
} from 'react-icons/fa';

function Orders() {

    const [orders, setOrders] = useState(new Map());
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);

    async function loadOrders(page){
        try{
            const response = await api.get(`search_orders_page/${page}/${rowsPerPage}`);
            setOrders(response.data);
            const npage = await api.get('search_orders_results');
            setCount(npage.data);
        }catch(err){
            loadOrders();
        }
    }

    useEffect(()=>{
        loadOrders()
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

                <ListOrders>
                    {[...orders.keys()].map(id => (
                        <>
                            {
                                !orders[id].periodicidade?
                                <Item key={id} order={orders[id]} />
                                :
                                null
                            }
                        </>
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