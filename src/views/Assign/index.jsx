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
    Checkout,
    Buy
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';

// SERVICES
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

// STORE
import { useSelector } from 'react-redux';

// ASSETS
import loading from '../../assets/gif/loading2.gif';

function Assign() {

    const params = useParams();

    const profileRedux = useSelector(state => state.user.user);

    const [profile] = useState(profileRedux);

    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState(0);
    const [totValue, setTotValue] = useState(valor);
    const [qnt, setQnt] = useState(1);
    const [bairro, setBairro] = useState('1');
    const [imagem, setImagem] = useState(loading);
    const [periodicidade, setPeriodicidade] = useState(7);

    async function loadProduct(){
        const response = await api.get(`search_product/${params.id}`);
        setProduto(response.data);
        const describe = document.getElementById('describe');
        describe.innerHTML = response.data.descricao;
        setValor(response.data.valor);
        setTotValue(response.data.valor);
        loadImagem(response.data.file_id);
    }

    async function loadImagem(e){
        const response = await api.get(`search_img/${e}`)
        setImagem(response.data.url);
    }
    
    async function handleAssign(){
        try{
            let frete = 0
            if(
                bairro === '1' || bairro === '2' || bairro === '4' ||
                bairro === '5' || bairro === '6' || bairro === '8' || 
                bairro === '12' || bairro === '14'|| bairro === '15' || 
                bairro === '16' || bairro === '17' ||bairro === '18' || 
                bairro === '18' || bairro === '19' ||bairro === '20' || 
                bairro === '21' || bairro === '22' ||bairro === '23' || 
                bairro === '24' || bairro === '25' ||bairro === '27' || 
                bairro === '32' || bairro === '33' ||bairro === '34' || 
                bairro === '35' || bairro === '38' ||bairro === '39' || 
                bairro === '40' || bairro === '41' ||bairro === '45'                
                ){
                    frete = 10
                }else if (
                    bairro === '3' || bairro === '7' || bairro === '10' ||
                    bairro === '11' || bairro === '26' || bairro === '28' ||
                    bairro === '29' || bairro === '30' || bairro === '31' ||
                    bairro === '37' || bairro === '42' || bairro === '43' ||
                    bairro === '44' || bairro === '47'
                ){
                    frete = 15
                }else {
                    frete = 20
                }
            const response = await api.post('register_order', {
                bairro,
                qnt,
                periodicidade,
                subtotal: totValue,
                user_id: profile.id,
                product_id: params.id,
                pagamento: "Aguardando pagamento",
                frete,
            })
            toast.info('Finalizando pedido...', { position: 'bottom-center' });
            setTimeout(function(){
                window.location.href=`http://localhost:3000/finalizar-compra/${response.data}`
            }, 3000)
        }catch(err){
            toast.error('Erro ao comprar produto, por favor tente novamente!', { position: 'bottom-center'} );
        }
    }

    async function handleBuy(){
        try{
            let frete = 0
            if(
                bairro === '1' || bairro === '2' || bairro === '4' ||
                bairro === '5' || bairro === '6' || bairro === '8' || 
                bairro === '12' || bairro === '14'|| bairro === '15' || 
                bairro === '16' || bairro === '17' ||bairro === '18' || 
                bairro === '18' || bairro === '19' ||bairro === '20' || 
                bairro === '21' || bairro === '22' ||bairro === '23' || 
                bairro === '24' || bairro === '25' ||bairro === '27' || 
                bairro === '32' || bairro === '33' ||bairro === '34' || 
                bairro === '35' || bairro === '38' ||bairro === '39' || 
                bairro === '40' || bairro === '41' ||bairro === '45'                
                ){
                    frete = 10
                }else if (
                    bairro === '3' || bairro === '7' || bairro === '10' ||
                    bairro === '11' || bairro === '26' || bairro === '28' ||
                    bairro === '29' || bairro === '30' || bairro === '31' ||
                    bairro === '37' || bairro === '42' || bairro === '43' ||
                    bairro === '44' || bairro === '47'
                ){
                    frete = 15
                }else {
                    frete = 20
                }
            const response = await api.post('register_order', {
                bairro,
                qnt,
                subtotal: totValue,
                user_id: profile.id,
                product_id: params.id,
                pagamento: "Aguardando pagamento",
                frete
            })
            toast.info('Finalizando pedido...', { position: 'bottom-center' });
            setTimeout(function(){
                window.location.href=`http://localhost:3000/finalizar-compra/${response.data}`
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

                    <Subtitle id="describe"/>

                    <Options>
                        <Subtitle>
                            <b>Escolha abaixo as opções para sua assinatura:</b>
                        </Subtitle>

                        <Form>

                            <Label>
                                Periodicidade da Entrega:
                            </Label>
                            <Select value={periodicidade} onChange={e => setPeriodicidade(e.target.value)}>
                                <option value={7}>Semanal</option>
                                <option value={15}>Quinzenal</option>
                                <option value={30}>Mensal</option>
                            </Select>

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
                                <option /* R$6,00 */ value={1}>Aclimação</option>
                                <option /* R$6,00 */ value={2}>Alvorada</option>
                                <option /* R$11,00 */ value={3}>Areia Preta</option>
                                <option /* R$8,00 */ value={4}>Baú</option>
                                <option /* R$7,00 */ value={5}>Belmonte</option>
                                <option /* R$8,00 */ value={6}>Boa Vista</option>
                                <option /* R$9,00 */ value={7}>Campos Elísios</option>
                                <option /* R$6,00 */ value={8}>Carneirinhos</option>
                                <option /* R$19,00 */ value={9}>Centro Industrial</option>
                                <option /* R$11,00 */ value={10}>Cruzeiro Celeste</option>
                                <option /* R$13,00 */ value={11}>Estrela Dalva</option>
                                <option /* R$7,00 */ value={12}>Industrial</option>
                                <option /* R$16,00 */ value={13}>Jacuí</option>
                                <option /* R$7,00 */ value={14}>JK</option>
                                <option /* R$7,00 */ value={15}>José de Alencar</option>
                                <option /* R$6,00 */ value={16}>José Eloi</option>
                                <option /* R$8,00 */ value={17}>Laranjeiras</option>
                                <option /* R$7,00 */ value={18}>Loanda</option>
                                <option /* R$6,00 */ value={19}>Lourdes</option>
                                <option /* R$6,00 */ value={20}>Lucilia</option>
                                <option /* R$6,00 */ value={21}>Mangabeiras</option>
                                <option /* R$8,00 */ value={22}>Metalúrgico</option>
                                <option /* R$6,00 */ value={23}>Nossa Senhora da Conceição</option>
                                <option /* R$6,00 */ value={24}>Nova Aclimação</option>
                                <option /* R$8,00 */ value={25}>Nova Esperança</option>
                                <option /* R$11,00 */ value={26}>Novo Cruzeiro</option>
                                <option /* R$7,00 */ value={27}>Novo Horizonte</option>
                                <option /* R$9,00 */ value={28}>Paineiras</option>
                                <option /* R$9,00 */ value={29}>Palmares</option>
                                <option /* R$13,00 */ value={30}>Pedreira</option>
                                <option /* R$13,00 */ value={31}>Petrópolis</option>
                                <option /* R$7,00 */ value={32}>Recanto Paraíso</option>
                                <option /* R$6,00 */ value={33}>República</option>
                                <option /* R$6,00 */ value={34}>Rosário</option>
                                <option /* R$6,00 */ value={35}>Santa Bárbara</option>
                                <option /* R$19,00 */ value={36}>Santa Cruz</option>
                                <option /* R$11,00 */ value={37}>Santo Hipólito</option>
                                <option /* R$6,00 */ value={38}>São Benedito</option>
                                <option /* R$6,00 */ value={39}>São João</option>
                                <option /* R$7,00 */ value={40}>São Jorge</option>
                                <option /* R$7,00 */ value={41}>Satélite</option>
                                <option /* R$9,00 */ value={42}>Sion</option>
                                <option /* R$13,00 */ value={43}>Tanquinho</option>
                                <option /* R$11,00 */ value={44}>Teresópolis</option>
                                <option /* R$6,00 */ value={45}>Vale Sol</option>
                                <option /* R$19,00 */ value={46}>Vera Cruz</option>
                                <option /* R$11,00 */ value={47}>Vila Tanque</option>
                                <option /* R$20,00 */ value={48}>Zona Rural</option>
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

                    <Checkout onClick={handleAssign}>
                        ASSINAR AGORA
                    </Checkout>
                    <Buy onClick={handleBuy}>
                        COMPRAR UMA VEZ
                    </Buy>

                </Options2>

                <Slider />

            </Body>
            <Footer />
      </Container>
  );
}

export default Assign;