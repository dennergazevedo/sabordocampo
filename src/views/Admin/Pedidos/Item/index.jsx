/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Menu,
    Divider,
    CancelButton,
    ConfirmButton,
    Body
} from './styles';

// ICONS
import {
    FaInfo,
    FaEdit
} from 'react-icons/fa';

// REACTSTRAP
import { 
    Popover, 
    PopoverHeader, 
    PopoverBody,
    Modal,
    ModalHeader,
    ModalFooter,
} from 'reactstrap';

// SERVICES
import api from '../../../../services/api';
import { toast } from 'react-toastify';

function Item(props) {

    const [info, setInfo] = useState(false);
    const [order] = useState(props.order);
    const [produto, setProduto] = useState('');
    const [data, setData] = useState(null);
    const [user, setUser] = useState('');
    const [modal, setModal] = useState(false);
    const [pagamento, setPagamento] = useState('');
    const [ativo, setAtivo] = useState(1);

    async function loadInfo(){
        let d = order.createdAt.split('-');
        let a = d[2].split('T');
        setData(`${a[0]}/${d[1]}/${d[0]}`);

        const prod = await api.get(`search_product/${props.order.product_id}`);
        setProduto(prod.data);

        const us = await api.get(`search_user/${order.user_id}`);
        setUser(us.data);
    }

    async function handleEditOrder(){
      try{
        await api.put(`update_order/${order.id}`,{
          pagamento,
          ativo,
        })
        toast.success('Atualizado com sucesso!', { position: 'bottom-center' });
        toggleModal();
        setTimeout(function(){
          window.location.reload();
        },)
      }catch(err){
        toast.error('Falha ao atualizar pedido, tente novamente', { position: 'bottom-center' });
      }
    }

    useEffect(()=>{
        loadInfo()
    }, [])

    const toggle = () => setInfo(!info);
    const toggleModal = () => setModal(!modal);

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

          <Divider />

          <Menu>
            <FaEdit onClick={toggleModal} style={{fontSize:'16px', cursor: 'pointer'}}/>
          </Menu>
          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Editar Pedido</ModalHeader>
            
            <Body>
              <label>Pagamento:</label>
              <select type="text" value={pagamento} onChange={e => setPagamento(e.target.value)}>
                <option value="Aguardando pagamento">Aguardando pagamento</option>
                <option value="Pagamento aprovado">Pagamento aprovado</option>
              </select>

              <label>Ativo?</label>
              <select type="text" value={ativo} onChange={e => setAtivo(e.target.value)}>
                <option value={1}>Sim</option>
                <option value={2}>Não</option>
              </select>
            </Body>
            
            <ModalFooter>
              <CancelButton onClick={toggleModal}>
                Cancelar
              </CancelButton>
              <ConfirmButton onClick={handleEditOrder}>
                Salvar
              </ConfirmButton>
            </ModalFooter>
          </Modal>
      </Container>
  );
}

export default Item;