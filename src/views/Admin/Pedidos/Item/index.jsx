/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Menu,
    Divider,
} from './styles';

// ICONS
import {
    FaInfo,
} from 'react-icons/fa';

// REACTSTRAP
import { 
    Popover, 
    PopoverHeader, 
    PopoverBody,
} from 'reactstrap';

// SERVICES
import api from '../../../../services/api';

function Item(props) {

    const [info, setInfo] = useState(false);
    const [order] = useState(props.order);
    const [produto, setProduto] = useState('');
    const [data, setData] = useState(null);
    const [user, setUser] = useState('');

    async function loadInfo(){
        let d = order.createdAt.split('-');
        let a = d[2].split('T');
        setData(`${a[0]}/${d[1]}/${d[0]}`);

        const prod = await api.get(`search_product/${props.order.product_id}`);
        setProduto(prod.data);

        const us = await api.get(`search_user/${order.user_id}`);
        setUser(us.data);
    }

    useEffect(()=>{
        loadInfo()
    }, [])

    const toggle = () => setInfo(!info);

  return (
      <Container>
          <Menu>
            000{order.id}
          </Menu>
          <Divider />

          <Menu>
            {user.nome}
          </Menu>
          <Divider />

          <Menu>
            {
              order.periodicidade?
              <>
                {
                  order.periodicidade === 7?
                  "Entrega Semanal"
                  :
                  <>
                    {
                      order.periodicidade === 15?
                      "Entrega Quinzenal"
                      :
                      "Entrega Mensal"
                    }
                  </>
                }
              </>
              :
              "Compra única"
            }
          </Menu>
          <Divider />

          <Menu>
              {order.pagamento}
          </Menu>
          <Divider />

          <Menu>
            <FaInfo id={`info${props.order.id}`} style={{fontSize:'16px', cursor: 'pointer'}}/>
          </Menu>
            <Popover placement="bottom" isOpen={info} target={`info${props.order.id}`} toggle={toggle}>
                <PopoverHeader>Informações do Pedido</PopoverHeader>
                <PopoverBody style={{padding: '20px', fontSize:'12px'}}>
                    {produto.titulo} x 0{order.qnt}
                    <hr/>
                    {produto.descricao}
                    <hr/>
                    Valor: R${order.subtotal.toFixed(2)}
                    <hr/>
                    Comprado em {data}
                </PopoverBody>
            </Popover>
      </Container>
  );
}

export default Item;