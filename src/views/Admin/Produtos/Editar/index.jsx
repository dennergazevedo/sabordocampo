/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

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
    Delete
} from './editar.js';

// COMPONENTES
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

// ASSETS
import loadingimg from '../../../../assets/gif/loading.gif';

// SERVICES
import { toast } from 'react-toastify';
import api from '../../../../services/api';
import history from '../../../../services/history';
import { useParams } from 'react-router-dom';

function Editar() {

    const params = useParams();

    const [imgUrl, setImgUrl] = useState(loadingimg);
    const [imgId, setImgId] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [subtitulo, setSubtitulo] = useState('');
    const [valor, setValor] = useState(0);
    const [estoque, setEstoque] = useState(0);

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
          toast.error('Falha ao anexar imagem!', { position:'bottom-right' });
        }
    }

    async function handleUpdate(){
        if(window.confirm('Deseja atualizar o produto? Esse processo não pode ser desfeito!')){
            if(imgId){
                try{
                    await api.put(`/update_product/${params.id}`, {
                        titulo,
                        subtitulo,
                        descricao,
                        valor,
                        estoque,
                        file_id: imgId,
                    })
                    toast.success('Produto Cadastrado com sucesso!', { position: 'bottom-center' });
                    setTimeout(function(){
                        history.push('/painel/produtos/pesquisa');
                        window.location.reload();
                    }, 3000)
                }catch(err){
                    toast.error('Falha ao editar produto, verifique os dados e tente novamente', { position: 'bottom-center' });
                }
            }else{
                toast.error('Imagem é obrigatório', { position: 'bottom-center' });
            }
        }
    }

    async function handleDelete(){
        if(window.confirm('Deseja apagar este produto?')){
            if(window.confirm('Este processo não poderá ser desfeito')){
                try{
                    await api.delete(`delete_product/${params.id}`);
                    toast.success('Produto apagado com sucesso!', { position: 'bottom-center' });
                    setTimeout(function(){
                        history.push('/painel/produtos/pesquisa');
                        window.location.reload();
                    }, 3000)
                }catch(err){
                    toast.error('Falha ao apagar produto', { position: 'bottom-center' });
                }
            }
        }
    }

    const handleBack = () => {
        if(window.confirm('Deseja realmente cancelar? Todo processo será perdido.')){
            window.history.back();
        }
    }

    async function loadProduct(){
        const { data } = await api.get(`search_product/${params.id}`);
        setTitulo(data.titulo);
        setSubtitulo(data.subtitulo);
        setValor(data.valor);
        setEstoque(data.estoque);
        setDescricao(data.descricao);
        setImgId(data.file_id);
    }

    async function loadImagem(){
        const { data } = await api.get(`search_img/${imgId}`);
        setImgUrl(data.url);
    }

    useEffect(()=>{
        loadProduct()
    }, [])

    useEffect(()=>{
        loadImagem()
    }, [imgId])

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

                <Register onClick={handleUpdate}>
                    EDITAR PRODUTO
                </Register>

                <Delete onClick={handleDelete}>
                    APAGAR PRODUTO
                </Delete>

                <Back onClick={handleBack}>
                    VOLTAR
                </Back>
          </Body>

          <Footer />
      </Container>
  );
}

export default Editar;