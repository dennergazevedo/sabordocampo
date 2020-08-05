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
} from './register.js';

// COMPONENTES
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// ASSETS
import loadingimg from '../../../assets/gif/loading.gif';
import noimage from '../../../assets/img/noimage.png';

// SERVICES
import { toast } from 'react-toastify';
import api from '../../../services/api';

function Produtos() {

    const [imgUrl, setImgUrl] = useState(noimage);
    const [imgId, setImgId] = useState(null);

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
                    <Input type="text" />

                    <Label>
                        SUBTÍTULO:
                    </Label>
                    <Input type="text" />

                    <Label>
                        VALOR (R$):
                    </Label>
                    <Input type="text" />

                    <Label>
                        ESTOQUE (und.):
                    </Label>
                    <Input type="text" />

                    <Label>
                        DESCRIÇÃO:
                    </Label>
                    <InputText type="text" />
                </Item>

                <Register>
                    CADASTRAR PRODUTO
                </Register>

                <Back>
                    VOLTAR
                </Back>
          </Body>

          <Footer />
      </Container>
  );
}

export default Produtos;