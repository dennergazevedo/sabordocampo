/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Menu,
    Divider,
    LinkPay,
} from './styles';

// ICONS
import {
    FaInfo,
    FaDollarSign,
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

    async function loadInfo(){
        let d = order.createdAt.split('-');
        let a = d[2].split('T');
        setData(`${a[0]}/${d[1]}/${d[0]}`);

        const prod = await api.get(`search_product/${props.order.product_id}`);
        setProduto(prod.data);
    }

    useEffect(()=>{
        loadInfo()
    }, [])

    const handlePay = () => {
        window.location.href= `http://localhost:3000/finalizar-compra/${order.id}`;
    }

    const toggle = () => setInfo(!info);

  return (
      <Container>
          <Menu>
            Pedido Nº 000{order.id}
          </Menu>
          <Divider />

          <Menu>
            {
              order.ativo === 1 ?
              "Ativo"
              :
              "Desativado"
            }
          </Menu>
          <Divider />

          <Menu>
            {
              order.periodicidade === 7?
              "Semanal"
              :
              <>
                {
                  order.periodicidade === 15?
                  "Quinzenal"
                  :
                  "Mensal"
                }
              </>
            }
          </Menu>
          <Divider />

          <Menu>
            R$ {order.subtotal.toFixed(2)}
          </Menu>
          <Divider />

          <Menu>
            {
                order.pagamento === 'Aguardando pagamento'?
                <LinkPay onClick={handlePay}>
                    <FaDollarSign style={{fontSize:'16px'}}/>
                    Pagar agora
                </LinkPay>
                :
                <>
                    {order.pagamento}
                </>
            }
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
                    Pedido em {data}
                </PopoverBody>
            </Popover>
      </Container>
  );
}

export default Item;