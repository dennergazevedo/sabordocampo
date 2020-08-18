/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Endereco,
    Fatura,
    Title,
    Items,
    Divider,
    DividerLeft,
    DividerFino,
    ProdutoDesc,
    ProdutoTitle,
    Aviso,
    AvisoTitle,
    CheckoutButton,
    BackButton,
    ItemInput,
    InputDiv,
} from './styles';

// COMPONENTES
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Paypal from '../../components/Paypal/index.jsx';
import InputMask from 'react-input-mask';

// BUTTONS PAYPAL
import CaixaMensalF10 from '../../components/Buttons/CaixaMensalF10.jsx';
import CaixaMensalF15 from '../../components/Buttons/CaixaMensalF15.jsx';
import CaixaMensalF20 from '../../components/Buttons/CaixaMensalF20.jsx';
import CaixaQuinzenalF10 from '../../components/Buttons/CaixaQuinzenalF10.jsx';
import CaixaQuinzenalF15 from '../../components/Buttons/CaixaQuinzenalF15.jsx';
import CaixaQuinzenalF20 from '../../components/Buttons/CaixaQuinzenalF20.jsx';
import CaixaSemanalF10 from '../../components/Buttons/CaixaSemanalF10.jsx';
import CaixaSemanalF15 from '../../components/Buttons/CaixaSemanalF15.jsx';
import CaixaSemanalF20 from '../../components/Buttons/CaixaSemanalF20.jsx';
import DuziaMensalF10 from '../../components/Buttons/DuziaMensalF10.jsx';
import DuziaMensalF15 from '../../components/Buttons/DuziaMensalF15.jsx';
import DuziaMensalF20 from '../../components/Buttons/DuziaMensalF20.jsx';
import DuziaQuinzenalF10 from '../../components/Buttons/DuziaQuinzenalF10.jsx';
import DuziaQuinzenalF15 from '../../components/Buttons/DuziaQuinzenalF15.jsx';
import DuziaQuinzenalF20 from '../../components/Buttons/DuziaQuinzenalF20.jsx';
import DuziaSemanalF10 from '../../components/Buttons/DuziaSemanalF10.jsx';
import DuziaSemanalF15 from '../../components/Buttons/DuziaSemanalF15.jsx';
import DuziaSemanalF20 from '../../components/Buttons/DuziaSemanalF20.jsx';
import PenteMensalF10 from '../../components/Buttons/PenteMensalF10.jsx';
import PenteMensalF15 from '../../components/Buttons/PenteMensalF15.jsx';
import PenteMensalF20 from '../../components/Buttons/PenteMensalF20.jsx';
import PenteQuinzenalF10 from '../../components/Buttons/PenteQuinzenalF10.jsx';
import PenteQuinzenalF15 from '../../components/Buttons/PenteQuinzenalF15.jsx';
import PenteQuinzenalF20 from '../../components/Buttons/PenteQuinzenalF20.jsx';
import PenteSemanalF10 from '../../components/Buttons/PenteSemanalF10.jsx';
import PenteSemanalF15 from '../../components/Buttons/PenteSemanalF15.jsx';
import PenteSemanalF20 from '../../components/Buttons/PenteSemanalF20.jsx';

// SERVICES
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

// STORE
import { useSelector } from 'react-redux';

function Checkout() {

    const params = useParams();
    const profileRedux = useSelector(state => state.user.user);

    const [profile] = useState(profileRedux);
    const [document, setDocument] = useState(null);
    const [pessoa, setPessoa] = useState('1');
    const [bairro, setBairro] = useState(1);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [qnt, setQnt] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [periodicidade, setPeriodicidade] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const [prodId, setProdId] = useState('');
    const [frete, setFrete] = useState(0);
    const [bairroCep, setBairroCep] = useState(null);
    const [cidade, setCidade] = useState('João Monlevade');
    const [estado, setEstado] = useState('Minas Gerais')

    async function loadInfo(){
        const response = await api.get(`search_order/${params.id}`)
        loadUser(response.data.user_id);
        if(response.data.address_id){
            const addr = await api.get(`search_address/${response.data.address_id}`)
            setCidade(addr.data.cidade);
            setBairroCep(addr.data.bairro);
            setLogradouro(addr.data.logradouro);
            setEstado(addr.data.estado);
        }
        loadProduto(response.data.product_id);
        setQnt(response.data.qnt);
        setSubTotal(response.data.subtotal);
        setBairro(response.data.bairro);
        setPeriodicidade(response.data.periodicidade);
        setFrete(response.data.frete);
    }

    async function loadUser(e){
        const response = await api.get(`search_user/${e}`)
        const completo = response.data.nome.split(' ');
        setNome(completo[0]);
        setSobrenome(completo[1]);
        setPhone(response.data.phone);
        setEmail(response.data.email);
    }

    async function loadProduto(e){
        const response = await api.get(`search_product/${e}`);
        setTitulo(response.data.titulo);
        setProdId(e)
    }

    async function handleConfirmData(){
        try{
            const response = await api.post('register_address', {
                logradouro,
                numero,
                bairro,
                cidade: 'João Monlevade',
                estado: 'Minas Gerais',
                user_id: profile.id,
            })

            await api.put(`update_user/${profile.id}`, {
                document,
                phone,
            })

            await api.put(`update_order/${params.id}`, {
                address_id: response.data,
            })

            setConfirm(true);
        }catch(err){
            toast.error('Oops, falha ao finalizar pedido!', { position: 'bottom-center' });
        }
    }

    useEffect(()=>{
        loadInfo()
    }, [])

  return (
      <Container>
          <Navbar />

            <Body>
                <Endereco>
                    <Title>
                        DETALHAMENTO DE FATURAMENTO E ENDEREÇO
                    </Title>

                    <ItemInput>
                        <InputDiv>
                            <label>Nome *</label>
                            <input disabled type="text" value={nome} onChange={e => setNome(e.target.nome)}/>
                        </InputDiv>

                        <InputDiv>
                            <label>Sobrenome *</label>
                            <input disabled type="text" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
                        </InputDiv>
                    </ItemInput>

                    <ItemInput>
                        <InputDiv>
                            <label>Tipo de Pessoa *</label>
                            <select type="text" value={pessoa} onChange={e => setPessoa(e.target.value)}>
                                <option value={1}>Pessoa Física</option>
                                <option value={2}>Pessoa Jurídica</option>
                            </select>
                        </InputDiv>

                        {
                            pessoa === '1'?
                            <InputDiv>
                                <label>CPF *</label>
                                <InputMask
                                mask="999.999.999-99"
                                onChange={e => setDocument(e.target.value)}
                                value={document}
                                className="inputMask"
                                placeholder=" 999.999.999-99"
                                disabled={confirm}
                                />
                            </InputDiv>
                            :
                            <InputDiv>
                                <label>CNPJ *</label>
                                <InputMask
                                mask="99.999.999/9999-99"
                                onChange={e => setDocument(e.target.value)}
                                value={document}
                                className="inputMask"
                                placeholder=" 99.999.999/9999-99"
                                disabled={confirm}
                                />
                            </InputDiv>
                        }
                    </ItemInput>

                    <ItemInput>
                        <InputDiv>
                            <label>E-mail *</label>
                            <input disabled type="text" value={email}/>
                        </InputDiv>

                        <InputDiv>
                            <label>Telefone *</label>
                            <InputMask
                                mask="(99)9 9999-9999"
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                                className="inputMask"
                                disabled={confirm}
                            />
                        </InputDiv>
                    </ItemInput>

                    <DividerLeft />

                    <ItemInput>
                        <InputDiv>
                            <label>País *</label>
                            <input disabled value={"Brasil"}/>
                        </InputDiv>

                        <InputDiv>
                            <label>Estado *</label>
                            <input disabled value={estado}/>
                        </InputDiv>
                    </ItemInput>

                    <ItemInput>
                        <InputDiv>
                            <label>Cidade *</label>
                            <input disabled value={cidade} type="text"/>
                        </InputDiv>

                        <InputDiv>
                            <label>Bairro *</label>
                            {
                                bairroCep ?
                                <input disabled value={bairro} type="text"/>
                                :
                                <select value={bairro} disabled>
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
                                </select>
                            }
                        </InputDiv>
                    </ItemInput>

                    <ItemInput>
                        <InputDiv>
                            <label>Rua *</label>
                            <input disabled={confirm} type="text" value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
                        </InputDiv>

                        <InputDiv>
                            <label>Numero *</label>
                            <input disabled={confirm} type="number" value={numero} onChange={e => setNumero(e.target.value)}/>
                        </InputDiv>
                    </ItemInput>

                </Endereco>

                <Fatura>
                    <Title>
                        SEU PEDIDO
                    </Title>

                    <Items>
                        <span>
                            PRODUTO
                        </span>
                        <span>
                            SUBTOTAL
                        </span>
                    </Items>

                    <Divider />

                    <Items>
                        <ProdutoDesc>
                            <ProdutoTitle>
                                {titulo} 
                                <b style={{marginLeft:'5px'}}>x {qnt}</b>
                            </ProdutoTitle>
                        </ProdutoDesc>
                        <span>
                            R${Number(Number(subTotal - frete) / Number(qnt)).toFixed(2)} / unid.
                        </span>
                    </Items>

                    <DividerFino />

                    <Items>
                        <span>FRETE</span>
                        <span>R${Number(frete).toFixed(2)}</span>
                    </Items>

                    <Items>
                        <span>SUBTOTAL</span>
                        {
                            periodicidade ?
                            <span>R${Number(subTotal).toFixed(2)} / ciclo</span>
                            :
                            <span>R${Number(subTotal).toFixed(2)}</span>
                        }
                    </Items>

                    {
                        periodicidade ?
                        <Items>
                            <span>PERIODICIDADE</span>
                            <span>Ciclo de {periodicidade} dias</span>
                        </Items>
                        :
                        null
                    }

                    {
                        periodicidade ?
                        <>
                            {
                                confirm?
                                <>
                                {
                                    prodId === 1 || prodId === '1'?
                                    <>
                                    {
                                        periodicidade === 7 || periodicidade === '7'?
                                        <>
                                            {
                                                frete === 10 || frete === '10'?
                                                <>
                                                    <DuziaSemanalF10 />
                                                </>
                                                :
                                                <>
                                                {
                                                    frete === 15 || frete === '15'?
                                                    <>
                                                        <DuziaSemanalF15 />
                                                    </>
                                                    :
                                                    <DuziaSemanalF20 />
                                                }
                                                </>
                                            }
                                        </>
                                        :
                                        <>
                                        {
                                            periodicidade === 15 || periodicidade === '15'?
                                            <>
                                                {
                                                    frete === 10 || frete === '10'?
                                                    <>
                                                        <DuziaQuinzenalF10 />
                                                    </>
                                                    :
                                                    <>
                                                    {
                                                        frete === 15 || frete === '15'?
                                                        <>
                                                            <DuziaQuinzenalF15 />
                                                        </>
                                                        :
                                                        <DuziaQuinzenalF20 />
                                                    }
                                                    </>
                                                }
                                            </>
                                            :
                                            <>
                                                {
                                                    frete === 10 || frete === '10'?
                                                    <>
                                                        <DuziaMensalF10 />
                                                    </>
                                                    :
                                                    <>
                                                    {
                                                        frete === 15 || frete === '15'?
                                                        <>
                                                            <DuziaMensalF15 />
                                                        </>
                                                        :
                                                        <DuziaMensalF20 />
                                                    }
                                                    </>
                                                }
                                            </>
                                        }
                                        </>
                                    }
                                    </>
                                    :
                                    <>
                                    {
                                        prodId === 2 || prodId === '2'?
                                        <>
                                    {
                                        periodicidade === 7 || periodicidade === '7'?
                                        <>
                                            {
                                                frete === 10 || frete === '10'?
                                                <>
                                                    <PenteSemanalF10 />
                                                </>
                                                :
                                                <>
                                                {
                                                    frete === 15 || frete === '15'?
                                                    <>
                                                        <PenteSemanalF15 />
                                                    </>
                                                    :
                                                    <PenteSemanalF20 />
                                                }
                                                </>
                                            }
                                        </>
                                        :
                                        <>
                                        {
                                            periodicidade === 15 || periodicidade === '15'?
                                            <>
                                                {
                                                    frete === 10 || frete === '10'?
                                                    <>
                                                        <PenteQuinzenalF10 />
                                                    </>
                                                    :
                                                    <>
                                                    {
                                                        frete === 15 || frete === '15'?
                                                        <>
                                                            <PenteQuinzenalF15 />
                                                        </>
                                                        :
                                                        <PenteQuinzenalF20 />
                                                    }
                                                    </>
                                                }
                                            </>
                                            :
                                            <>
                                                {
                                                    frete === 10 || frete === '10'?
                                                    <>
                                                        <PenteMensalF10 />
                                                    </>
                                                    :
                                                    <>
                                                    {
                                                        frete === 15 || frete === '15'?
                                                        <>
                                                            <PenteMensalF15 />
                                                        </>
                                                        :
                                                        <PenteMensalF20 />
                                                    }
                                                    </>
                                                }
                                            </>
                                        }
                                        </>
                                    }
                                    </>
                                        :
                                        <>
                                        {
                                            prodId === 3 || prodId === '3'?
                                            <>
                                    {
                                        periodicidade === 7 || periodicidade === '7'?
                                        <>
                                            {
                                                frete === 10 || frete === '10'?
                                                <>
                                                    <CaixaSemanalF10 />
                                                </>
                                                :
                                                <>
                                                {
                                                    frete === 15 || frete === '15'?
                                                    <>
                                                        <CaixaSemanalF15 />
                                                    </>
                                                    :
                                                    <CaixaSemanalF20 />
                                                }
                                                </>
                                            }
                                        </>
                                        :
                                        <>
                                        {
                                            periodicidade === 15 || periodicidade === '15'?
                                            <>
                                                {
                                                    frete === 10 || frete === '10'?
                                                    <>
                                                        <CaixaQuinzenalF10 />
                                                    </>
                                                    :
                                                    <>
                                                    {
                                                        frete === 15 || frete === '15'?
                                                        <>
                                                            <CaixaQuinzenalF15 />
                                                        </>
                                                        :
                                                        <CaixaQuinzenalF20 />
                                                    }
                                                    </>
                                                }
                                            </>
                                            :
                                            <>
                                                {
                                                    frete === 10 || frete === '10'?
                                                    <>
                                                        <CaixaMensalF10 />
                                                    </>
                                                    :
                                                    <>
                                                    {
                                                        frete === 15 || frete === '15'?
                                                        <>
                                                            <CaixaMensalF15 />
                                                        </>
                                                        :
                                                        <CaixaMensalF20 />
                                                    }
                                                    </>
                                                }
                                            </>
                                        }
                                        </>
                                    }
                                    </>
                                            :
                                            null
                                        }
                                        </>
                                    }
                                    </>
                                }
                                </>
                                :
                                <>
                                    <CheckoutButton onClick={handleConfirmData}>
                                        CONFIRMAR DADOS E FINALIZAR PEDIDO
                                    </CheckoutButton>
                                    <BackButton onClick={() => window.history.back()}>
                                        VOLTAR
                                    </BackButton>
                                </>
                            }
                            </>
                            :
                            <>
                            {
                                confirm ?
                                <Paypal descricao={`${titulo} x${qnt}`} valor={Number(subTotal)}/>
                                :
                                <>
                                    <CheckoutButton onClick={handleConfirmData}>
                                        CONFIRMAR DADOS E FINALIZAR PEDIDO
                                    </CheckoutButton>
                                    <BackButton onClick={() => window.history.back()}>
                                        VOLTAR
                                    </BackButton>
                                </>
                            }
                            </>
                    }

                    <Aviso>
                        <AvisoTitle>
                            * Não aceitamos cartões virtuais
                        </AvisoTitle>

                        <span>
                            Todas as informações fornecidas por você a Sabor do Campo
                             são tratadas sob a mais absoluta confidencialidade. 
                             Ou seja, mais ninguém tem acesso. Seus dados pessoais 
                             serão utilizados apenas para efetivar suas compras e 
                             para que possamos enviar a você as novidades do site. 
                             No momento do cadastro, você escolhe se quer ou não 
                             receber esse tipo de e-mail. Em hipótese alguma 
                             informações a seu respeito serão repassadas a terceiros.
                        </span>
                    </Aviso>

                </Fatura>
            </Body>

          <Footer />
      </Container>
  );
}

export default Checkout;