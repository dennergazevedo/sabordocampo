import React, { useState, useEffect, useRef } from 'react';

// STYLED COMPONENTS
import {
    Buttons
} from './styles.js'

function Paypal(props) {

    const [loaded, setLoaded] = useState(false);

    let paypalRef = useRef();


    useEffect(()=>{
        const script = document.createElement("script");
        script.src="https://www.paypal.com/sdk/js?client-id=AdWUPxxmaGwLfNgzdM_yCTi_E-9zli5IIsVpEz23PRYlCOxQiQsWbki1nl1MC-ZVeUw5WqhEEW87Zlxm&currency=BRL"
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);

        if(loaded){
            setTimeout(()=>{
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description: props.descricao,
                                        amount: {
                                            value: props.valor,
                                        },
                                    }
                                ]
                            })
                        },
                        onApprove: async (data, actions) => {
                            const order = await actions.order.capture();

                            console.log('FINALIZOU' + order);
                        }
                    })
                    .render(paypalRef);
            })
        }
    })

  return (
        <Buttons>
            <div ref={v => (paypalRef = v)} />
        </Buttons>
  );
}

export default Paypal;