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
    Correios
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

// ICONS
import {
    FaSearch
} from 'react-icons/fa';

// COMPONENTS
import InputMask from 'react-input-mask';

// CEP PROMISE
const cepPromise = require('cep-promise')

function Buy() {

    const params = useParams();

    const profileRedux = useSelector(state => state.user.user);

    const [profile] = useState(profileRedux);

    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState(0);
    const [totValue, setTotValue] = useState(valor);
    const [qnt, setQnt] = useState(1);
    const [bairro, setBairro] = useState('1');
    const [imagem, setImagem] = useState(loading);
    const [cep, setCep] = useState('');
    const [freteCorreios, setFreteCorreios] = useState(10);
    const [peso, setPeso] = useState(0);
    const [comprimento, setComprimento] = useState(0);
    const [altura, setAltura] = useState(0);
    const [largura, setLargura] = useState(0);
    const [noFrete, setNoFrete] = useState(false);
    const [logradouro, setLogradouro] = useState(null);
    const [estado, setEstado] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [addr, setAddr] = useState(null);

    async function loadProduct(){
        const response = await api.get(`search_product/${params.id}`);
        setProduto(response.data);
        setPeso(response.data.peso);
        setComprimento(response.data.comprimento);
        setAltura(response.data.altura);
        setLargura(response.data.largura);
        const describe = document.getElementById('describe');
        describe.innerHTML = response.data.descricao;
        setValor(response.data.valor);
        setTotValue(Number(response.data.valor) + Number(freteCorreios));
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
                frete: freteCorreios,
                user_id: profile.id,
                product_id: params.id,
                pagamento: "Aguardando pagamento",
                address_id: addr
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

    async function handleFreteCorreios(){
        try{
            const pesoEnvio = peso / 1000;
            let intCep = cep.replace('.', '');
            intCep = intCep.replace('-', '');
            const response = await api.post('frete_correios', {
                cep: intCep,
                peso: parseInt(pesoEnvio, 10),
                comprimento: parseInt(comprimento, 10),
                altura: parseInt(altura, 10),
                largura: parseInt(largura, 10)
              })
            console.log(response.data);
            const taxa = parseFloat(response.data.Valor) * 1.2

            if(taxa === 0){
                setNoFrete(true);
                toast.error('Não foi possível calcular o frete, tente novamente mais tarde', { position: 'bottom-center' });
            }else{
                let aux = await cepPromise(intCep).catch(console.log())
                setLogradouro(aux.street)
                setEstado(aux.state)
                setBairro(aux.neighborhood)
                setCidade(aux.city)
                setNoFrete(false);
                const addr = await api.post('/register_address',{
                    cep,
                    logradouro,
                    bairro,
                    cidade,
                    estado,
                })
                setAddr(addr.data);
                setFreteCorreios(taxa);
            }
        }catch(err){
            toast.error('Não foi possível localizar o CEP, tente novamente!', { position: 'bottom-center' });
        }
    }

    useEffect(()=>{
        setTotValue(Number(valor * qnt) + Number(freteCorreios));
    }, [qnt])

    useEffect(()=>{
        window.location.href="#index";
        loadProduct();
    }, [])

    useEffect(()=>{
        setNoFrete(false);
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
                setFreteCorreios(10)
            }else if (
                bairro === '3' || bairro === '7' || bairro === '10' ||
                bairro === '11' || bairro === '26' || bairro === '28' ||
                bairro === '29' || bairro === '30' || bairro === '31' ||
                bairro === '37' || bairro === '42' || bairro === '43' ||
                bairro === '44' || bairro === '47'
            ){
                setFreteCorreios(15)
            }else {
                setFreteCorreios(20)
            }
    }, [bairro])

    useEffect(()=>{
        setTotValue(Number(valor * qnt) + Number(freteCorreios));
    }, [freteCorreios])

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

                        <Correios>
                            <span>Ou digite o CEP para entrega em outras cidades:</span>
                            <div>
                                <InputMask
                                    mask="99.999-999"
                                    onChange={e => setCep(e.target.value)}
                                    value={cep}
                                    className="inputMask"
                                    placeholder="CEP"
                                />
                                <button onClick={handleFreteCorreios}><FaSearch /></button>
                            </div>
                            {
                                freteCorreios ?
                                <span>
                                    Valor do frete: R${freteCorreios.toFixed(2)}
                                </span>
                                :
                                null
                            }
                        </Correios>
                    </Options>

                </Right>

                <Options2>
                    <Valor>
                        Total Final: <span>R${totValue.toFixed(2)}</span>
                    </Valor>

                    <Quantidade>
                        <ButtonQnt onClick={handleMenos}>-</ButtonQnt>
                        <InputQnt value={qnt} onChange={e => setQnt(e.target.value)} />
                        <ButtonQnt onClick={handleMais}>+</ButtonQnt>
                    </Quantidade>

                    <Checkout disabled={noFrete} onClick={handleBuy}>
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