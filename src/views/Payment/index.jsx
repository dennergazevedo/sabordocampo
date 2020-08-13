import React, { useEffect } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Success,
    Redirect,
    Logomarca
} from './styles';

// LOTTIE
import * as success from '../../assets/json/success.json';
import * as loading from '../../assets/json/loading.json';
import Lottie from 'react-lottie';

// ASSETS
import logo from '../../assets/img/logomarca.png';

function Payment() {

    const successOptions = {
        loop: false,
        autoplay: true,
        animationData: success.default,
        rendererSettings:{
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
    
    const loadingOptions = {
        loop: true,
        autoplay: true,
        animationData: loading.default,
        rendererSettings:{
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    function handleRedirect(){
        setTimeout(function(){
            window.location.href = "https://www.sabordocampomg.com.br/perfil/pedidos"
        }, 5000)
    }

    useEffect(()=>{
        handleRedirect();
    }, [])

  return (
      <Container>
          <Body>
            <Logomarca src={logo} alt="SABOR DO CAMPO" />

            <Success>
                Pagamento concluído com sucesso!
            </Success>
            
            <Lottie options={successOptions} width={'50%'} style={{minWidth:'300px'}} /> 
            
            <Redirect>
                <Lottie options={loadingOptions} width={'50px'} /> 
                <span>Redirectionando...</span>
            </Redirect>

          </Body>
      </Container>
  );
}

export default Payment;