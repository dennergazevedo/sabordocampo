import React from 'react';

// STYLED COMPONENTS
import { 
    CheckoutButton 
} from './styles';

// ICONS
import {
    FaPaypal
} from 'react-icons/fa';

function Buttons() {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick"/>
    <input type="hidden" name="hosted_button_id" value="YRASDMXUETR8W"/>
    <CheckoutButton style={{backgroundColor:'#3b7bbf'}} name="submit">
        <FaPaypal className="icon"/>
        FINALIZAR PEDIDO
    </CheckoutButton>
    </form>
    );
}

export default Buttons;