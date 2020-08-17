import React, { useState } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Imagem,
    CircleInput,
    Item,
    Label,
    Input,
    InputText,
    Register,
    Back,
    Frete
} from './register.js';

// COMPONENTES
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

// ASSETS
import loadingimg from '../../../../assets/gif/loading.gif';
import noimage from '../../../../assets/img/noimage.png';

// SERVICES
import { toast } from 'react-toastify';
import api from '../../../../services/api';
import history from '../../../../services/history';

function Produtos() {

    const [imgUrl, setImgUrl] = useState(noimage);
    const [imgId, setImgId] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [subtitulo, setSubtitulo] = useState('');
    const [valor, setValor] = useState(0);
    const [estoque, setEstoque] = useState(0);
    const [largura, setLargura] = useState(0);
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [comprimento, setComprimento] = useState(0);

    async function handleUpload(e) {
        try{
          setImgUrl(loadingimg);
          const data = new FormData();
          data.append('file', e.currentTarget.files[0]);
          const response = await api.post('upload_file', data);
          const { url, id } = response.data;
          setImgUrl(url);
          setImgId(id);
        }catch(err){
          setImgUrl(noimage);
          toast.error('Falha ao anexar imagem!', { position:'bottom-right' });
        }
    }

    async function handleRegister(){
        if(window.confirm('Deseja cadastrar este produto?')){
            if(imgId){
                try{
                    await api.post('/register_product', {
                        titulo,
                        subtitulo,
                        descricao,
                        valor,
                        estoque,
                        file_id: imgId,
                        peso,
                        comprimento,
                        altura,
                        largura
                    })
                    toast.success('Produto Cadastrado com sucesso!', { position: 'bottom-center' });
                    setTimeout(function(){
                        history.push('/painel/produtos');
                        window.location.reload();
                    }, 3000)
                }catch(err){
                    toast.error('Falha ao cadastrar produto, verifique os dados e tente novamente', { position: 'bottom-center' });
                }
            }else{
                toast.error('Imagem é obrigatório', { position: 'bottom-center' });
            }
        }
    }

    const handleBack = () => {
        if(window.confirm('Deseja realmente cancelar? Todo processo será perdido.')){
            window.history.back();
        }
    }

  return (
      <Container>
          <Navbar />

          <Body>
                <Imagem>
                    <CircleInput src={imgUrl} alt="Profile" />
                    <input type="file" id="profileImg" accept=".png" onChange={e => handleUpload(e)}/>
                </Imagem>

                <Item>
                    <Label>
                        TÍTULO:
                    </Label>
                    <Input type="text" value={titulo} onChange={e => setTitulo(e.target.value)}/>

                    <Label>
                        SUBTÍTULO:
                    </Label>
                    <Input type="text" value={subtitulo} onChange={e => setSubtitulo(e.target.value)}/>

                    <Label>
                        VALOR (R$):
                    </Label>
                    <Input type="number" value={valor} onChange={e => setValor(e.target.value)}/>

                    <Label>
                        ESTOQUE (und.):
                    </Label>
                    <Input type="number" value={estoque} onChange={e => setEstoque(e.target.value)}/>

                    <Label>
                        DESCRIÇÃO:
                    </Label>
                    <InputText type="text" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                </Item>

                <Frete>
                    <div>
                        <label>
                            COMPRIMENTO (cm):
                        </label>
                        <input type="number" value={comprimento} onChange={e => setComprimento(e.target.value)}/>
                    </div>

                    <div>
                        <label>
                            ALTURA (cm):
                        </label>
                        <input type="number" value={altura} onChange={e => setAltura(e.target.value)}/>
                    </div>

                    <div>
                        <label>
                            LARGURA (cm):
                        </label>
                        <input type="number" value={largura} onChange={e => setLargura(e.target.value)}/>
                    </div>

                    <div>
                        <label>
                            PESO (gramas):
                        </label>
                        <input type="number" value={peso} onChange={e => setPeso(e.target.value)}/>
                    </div>
                </Frete>

                <Register onClick={handleRegister}>
                    CADASTRAR PRODUTO
                </Register>

                <Back onClick={handleBack}>
                    VOLTAR
                </Back>
          </Body>

          <Footer />
      </Container>
  );
}

export default Produtos;