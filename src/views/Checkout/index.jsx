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
import InputMask from 'react-input-mask';

// SERVICES
import api from '../../services/api';
import { useParams } from 'react-router-dom';

function Checkout() {

    const params = useParams();

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

    async function loadInfo(){
        const response = await api.get(`search_order/${params.id}`)
        loadUser(response.data.user_id);
        loadProduto(response.data.product_id);
        setQnt(response.data.qnt);
        setSubTotal(response.data.subtotal);
        setBairro(response.data.bairro);
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
                            <input type="text" value={nome} onChange={e => setNome(e.target.nome)}/>
                        </InputDiv>

                        <InputDiv>
                            <label>Sobrenome *</label>
                            <input type="text" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
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
                                />
                            </InputDiv>
                        }
                    </ItemInput>

                    <ItemInput>
                        <InputDiv>
                            <label>E-mail *</label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                        </InputDiv>

                        <InputDiv>
                            <label>Telefone *</label>
                            <InputMask
                                mask="(99)9 9999-9999"
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                                className="inputMask"
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
                            <input disabled value={"Minas Gerais"}/>
                        </InputDiv>
                    </ItemInput>

                    <ItemInput>
                        <InputDiv>
                            <label>Cidade *</label>
                            <input disabled value={'João Monlevade'} type="text"/>
                        </InputDiv>

                        <InputDiv>
                            <label>Bairro *</label>
                            <select value={bairro} disabled>
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
                            </select>
                        </InputDiv>
                    </ItemInput>

                    <ItemInput>
                        <InputDiv>
                            <label>Rua *</label>
                            <input type="text" value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
                        </InputDiv>

                        <InputDiv>
                            <label>Numero *</label>
                            <input type="number" value={numero} onChange={e => setNumero(e.target.value)}/>
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
                            R${Number(subTotal / qnt).toFixed(2)} / unid.
                        </span>
                    </Items>

                    <DividerFino />

                    <Items>
                        <span>SUBTOTAL</span>
                        <span>R${subTotal.toFixed(2)}</span>
                    </Items>
                    
                    <CheckoutButton>
                        FINALIZAR PEDIDO
                    </CheckoutButton>

                    <BackButton>
                        VOLTAR
                    </BackButton>

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