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

    const [clients, setClient] = useState(new Map());
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);

    async function loadClientes(page){
        try{
            const response = await api.get(`search_all_users/${page}/${rowsPerPage}`);
            setClient(response.data);
            const npage = await api.get('search_results_users');
            setCount(npage.data);
        }catch(err){
            loadClientes();
        }
    }

    useEffect(()=>{
        loadClientes(page)
    }, [])

    useEffect(()=>{
        loadClientes(page)
    }, [rowsPerPage])

    // PAGINATION
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        setClient(new Map());
        loadClientes(newPage);
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
                    Clientes
                </Title>
                <Subtitle>
                    Lista de todos os clientes cadastrados.
                </Subtitle>

                <ListOrders>
                    {[...clients.keys()].map(id => (
                        <Item key={id} client={clients[id]} />
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