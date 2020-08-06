import React, { useState } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Dados,
    Item,
    Title,
    Divider,
    Subtitle,
    ChangePass,
    EditButton
} from './styles';

// COMPONENTS
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import InputMask from 'react-input-mask';

// STORE
import { useDispatch, useSelector } from 'react-redux';
import { updateUserRequest } from '../../../store/modules/user/actions';

// SERVICES
import api from '../../../services/api';
import { toast } from 'react-toastify';

function Details() {

    const dispatch = useDispatch();
    const profileRedux = useSelector(state => state.user.user);

    const [nome, setNome] = useState(profileRedux.nome);
    const [email, setEmail] = useState(profileRedux.email);
    const [document, setDocument] = useState(profileRedux.document);
    const [phone, setPhone] = useState(profileRedux.phone);
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    function handleUpdate(){
        dispatch(updateUserRequest({
            id: profileRedux.id,
            nome,
            email,
            document,
            phone,
        }));
    }

    async function handleChangePass(){
        if(password === confirmPass){
            try{
                await api.put(`update_user_pass/${profileRedux.id}`, {
                    id: profileRedux.id,
                    oldPassword,
                    password,
                })
                toast.success('Senha alterada com sucesso', { position: 'bottom-center' });
                setTimeout(function(){
                    window.location.reload();
                }, 3000)
            }catch(err){
                toast.error('Verifique os dados e tente novamente!', { position: 'bottom-center' });
            }
        }else{
            toast.error('As senhas não batem!', { position: 'bottom-center' });
        }
    }

  return (
      <Container>
          <Navbar />

            <Body>
                <Title>
                    Dados Cadastrais
                </Title>

                <Divider />

                <Dados>
                    <Item>
                        <label>Nome*</label>
                        <input value={nome} onChange={e => setNome(e.target.value)} type="text"/>
                    </Item>

                    <Item>
                        <label>E-mail*</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                    </Item>
                </Dados>

                <Dados>
                    <Item>
                        <label>CPF*</label>
                        <InputMask
                            mask="999.999.999-99"
                            onChange={e => setDocument(e.target.value)}
                            value={document}
                            className="inputMask"
                            placeholder=" 999.999.999-99"
                        />
                    </Item>

                    <Item>
                        <label>Telefone*</label>
                        <InputMask
                            mask="(99)9 9999-9999"
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                            className="inputMask"
                            placeholder=" (99)9 9999-9999"
                        />
                    </Item>
                </Dados>

                <EditButton onClick={handleUpdate}>
                    EDITAR DADOS
                </EditButton>

                <Subtitle>
                    Alteração de Senha
                </Subtitle>

                <Divider />

                <Dados>
                    <Item>
                        <label>Senha atual (deixe em branco para não alterar)</label>
                        <input value={oldPassword} onChange={e => setOldPassword(e.target.value)} type="password"/>
                    </Item>
                </Dados>

                <Dados>
                    <Item>
                        <label>Nova senha (deixe em branco para não alterar)</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                    </Item>

                    <Item>
                        <label>Confirmar nova senha</label>
                        <input value={confirmPass} onChange={e => setConfirmPass(e.target.value)} type="password"/>
                    </Item>
                </Dados>

                <ChangePass onClick={handleChangePass}>
                    TROCAR SENHA
                </ChangePass>
            </Body>

          <Footer />
      </Container>
  );
}

export default Details;