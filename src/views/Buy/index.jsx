/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Product,
    Right,
    Title,
    Subtitle,
    Options,
    Form,
    Label,
    Select,
    Options2,
    Valor,
    Quantidade,
    ButtonQnt,
    InputQnt,
    Checkout
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';

// ASSETS
import loading from '../../assets/gif/loading2.gif';

// SERVICES
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

// STORE
import { useSelector } from 'react-redux';

function Buy() {

    const params = useParams();

    const profileRedux = useSelector(state => state.user.user);

    const [profile] = useState(profileRedux);

    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState(0);
    const [totValue, setTotValue] = useState(valor);
    const [qnt, setQnt] = useState(1);
    const [bairro, setBairro] = useState(1);
    const [imagem, setImagem] = useState(loading);

    async function loadProduct(){
        const response = await api.get(`search_product/${params.id}`);
        setProduto(response.data);
        setValor(response.data.valor);
        setTotValue(response.data.valor);
        loadImagem(response.data.file_id);
    }

    async function loadImagem(e){
        const response = await api.get(`search_img/${e}`)
        setImagem(response.data.url);
    }
    
    async function handleBuy(){
        try{
            const response = await api.post('register_order', {
                bairro,
                qnt,
                subtotal: totValue,
                user_id: profile.id,
                product_id: params.id,
                pagamento: "Aguardando pagamento",
            })
            toast.info('Finalizando pedido...', { position: 'bottom-center' });
            setTimeout(function(){
                window.location.href=`http://162.241.102.200:41097/finalizar-compra/${response.data}`
            }, 3000)
        }catch(err){
            toast.error('Erro ao comprar produto, por favor tente novamente!', { position: 'bottom-center'} );
        }
    }

    function handleMenos(){
        if(qnt !== 1){
            const quant = qnt - 1;
            setQnt(quant);
            setTotValue(valor * quant);
        }
    }

    function handleMais(){
        const quant = qnt + 1;
        setQnt(quant);
        setTotValue(valor * quant);
    }

    useEffect(()=>{
        setTotValue(valor * qnt);
    }, [qnt])

    useEffect(()=>{
        window.location.href="#index";
        loadProduct();
    }, [])

  return (
      <Container>
            <Navbar />

            <div id="index"/>
        
            <Body>
                <Product src={imagem} alt="PRODUTO"/>
                
                <Right>

                    <Title>
                        {produto.titulo}
                    </Title>

                    <Subtitle>
                        <b>Este pedido inclui:</b>
                        {produto.descricao}
                    </Subtitle>

                    <Options>
                        <Subtitle>
                            <b>Escolha abaixo as opções para sua assinatura:</b>
                        </Subtitle>

                        <Form>
                            
                            <Label>
                                Cidade da Entrega:
                            </Label>
                            <Select disabled>
                                <option value={1}>João Monlevade</option>
                            </Select>

                            <Label>
                                Bairro da Entrega:
                            </Label>
                            <Select value={bairro} onChange={e => setBairro(e.target.value)}>
                                <option value={1}>Aclimação</option>
                                <option value={2}>Alvorada</option>
                                <option value={3}>Areia Preta</option>
                                <option value={4}>Baú</option>
                                <option value={5}>Belmonte</option>
                                <option value={6}>Boa Vista</option>
                                <option value={7}>Campos Elísios</option>
                                <option value={8}>Carneirinhos</option>
                                <option value={9}>Centro Industrial</option>
                                <option value={10}>Cruzeiro Celeste</option>
                                <option value={11}>Estrela Dalva</option>
                                <option value={12}>Gentil Bicalho</option>
                                <option value={13}>Industrial</option>
                                <option value={14}>Jacuí</option>
                                <option value={15}>JK</option>
                                <option value={16}>José de Alencar</option>
                                <option value={17}>José Eloi</option>
                                <option value={18}>Laranjeiras</option>
                                <option value={19}>Loanda</option>
                                <option value={20}>Lourdes</option>
                                <option value={21}>Lucilia</option>
                                <option value={22}>Mangabeiras</option>
                                <option value={23}>Metalúrgico</option>
                                <option value={24}>Nossa Senhora da Conceição</option>
                                <option value={25}>Nossa Senhora do Rosário</option>
                                <option value={26}>Nova Aclimação</option>
                                <option value={27}>Nova Esperança</option>
                                <option value={28}>Novo Cruzeiro</option>
                                <option value={29}>Novo Horizonte</option>
                                <option value={30}>Paineiras</option>
                                <option value={31}>Palmares</option>
                                <option value={32}>Pedreira</option>
                                <option value={33}>Petrópolis</option>
                                <option value={34}>Recanto Paraíso</option>
                                <option value={35}>República</option>
                                <option value={36}>Rosário</option>
                                <option value={37}>Santa Bárbara</option>
                                <option value={38}>Santa Cruz</option>
                                <option value={39}>Santa Lúcia</option>
                                <option value={40}>Santo Hipólito</option>
                                <option value={41}>São Benedito</option>
                                <option value={42}>São João</option>
                                <option value={43}>São Jorge</option>
                                <option value={44}>Satélite</option>
                                <option value={45}>Sion</option>
                                <option value={46}>Tanquinho</option>
                                <option value={47}>Teresópolis</option>
                                <option value={48}>Vera Cruz</option>
                                <option value={49}>Vila Formosa</option>
                                <option value={50}>Vila Sol</option>
                                <option value={51}>Vila Tanque</option>
                                <option value={52}>Zona Rural</option>
                            </Select>

                            <Label>
                                Dia da Entrega:
                            </Label>
                            <Select disabled>
                                <option value={1}>Segunda-feira</option>
                            </Select>

                            <span>
                                Sua primeira entrega será realizada na próxima Segunda-feira após a confirmação da assinatura.
                            </span>

                        </Form>
                    </Options>

                </Right>

                <Options2>
                    <Valor>
                        Total Final: <span>R${totValue.toFixed(2)}</span> / por ciclo
                    </Valor>

                    <Quantidade>
                        <ButtonQnt onClick={handleMenos}>-</ButtonQnt>
                        <InputQnt value={qnt} onChange={e => setQnt(e.target.value)} />
                        <ButtonQnt onClick={handleMais}>+</ButtonQnt>
                    </Quantidade>

                    <Checkout onClick={handleBuy}>
                        COMPRAR AGORA
                    </Checkout>

                </Options2>

                <Slider />

            </Body>
            <Footer />
      </Container>
  );
}

export default Buy;