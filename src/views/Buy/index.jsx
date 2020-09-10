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
    const [freteCorreios, setFreteCorreios] = useState(0);
    const [peso, setPeso] = useState(0);
    const [comprimento, setComprimento] = useState(0);
    const [altura, setAltura] = useState(0);
    const [largura, setLargura] = useState(0);
    const [noFrete, setNoFrete] = useState(false);
    const [logradouro, setLogradouro] = useState(null);
    const [estado, setEstado] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [addr, setAddr] = useState(null);
    const [otherFrete, setOtherFrete] = useState(false);

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
        if(freteCorreios !== 0 && freteCorreios !== '0'){
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
        }else {
            toast.error('Digite o CEP para entrega do produto', { position: 'bottom-center' });
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
            const pesoEnvio = peso / 100;
            let intCep = cep.replace('.', '');
            intCep = intCep.replace('-', '');
            const response = await api.post('/frete_correios', {
                cep: intCep,
                peso: parseInt(pesoEnvio, 10),
                comprimento: parseInt(comprimento, 10),
                altura: parseInt(altura, 10),
                largura: parseInt(largura, 10)
              })
              console.log(response.data);
            const taxa = parseFloat(response.data.Valor) * 1.2
            setOtherFrete(true);

            let aux = await cepPromise(intCep).catch(console.log())
            setLogradouro(aux.street)
            setEstado(aux.state)
            setBairro(aux.neighborhood)
            setCidade(aux.city)

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

                        <Correios>
                            <span>Digite o CEP para cálculo do frete:</span>
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
                                otherFrete?
                                <>
                                    <span>Estado: {estado}</span>
                                    <span>Cidade: {cidade}</span>
                                    <span>Rua: {logradouro}</span>
                                </>
                                :
                                null
                            }

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