import React, { useContext, useEffect, useState } from 'react';

import './MeuCarrinho.css';

import CardProductPhoto from '../../Components/CardProductPhoto/CardProductPhoto';
import FormEntrega from '../../Components/FormEntrega/FormEntrega';

import storage from '../../Context/Context';

function MeuCarrinho() {
    const [desejaReceberEmCasa, setDesejaReceberEmCasa] = useState(false);
    const storageCart = JSON.parse(localStorage.getItem('cart'));
    const [cartItens, setCartItens] = useState(storageCart);
    const { setTotal } = useContext(storage);

    const handleDesejaReceberEmCasaChange = (e) => {
        setDesejaReceberEmCasa(e.target.checked);
    };

    useEffect(() => {
        if (!storageCart) {
            return setTotal(0)
        }
        else {
            const totalValue = storageCart.reduce((acc, crr) => {
                const { subTotal } = crr;
                return (acc + subTotal);
            }, 0);
            setTotal(totalValue);
        }
    }, [cartItens, setTotal, storageCart]);

    return (
        <div className=' mainContainer'>
            {!cartItens ?
                <p>Não há itens no carrinho</p>
                :
                <div>
                    <div className='cardProductContainer'>
                        {cartItens.map((item) => (
                            < CardProductPhoto
                                key={item.id}
                                src={item.src}
                                name={item.name}
                                price={item.pollens}
                                amount={item.quantity}
                                total={item.subTotal}
                            />
                        ))}
                    </div>
                    <div className='caixa-selecao'>
                        <h2>Envio</h2>
                        <input type="radio" name="envio" value="retirada" />
                        Desejo Retirar no escritório do Bees
                        <br />
                        <input
                            type="radio"
                            name="envio"
                            value="receber_em_casa"
                            checked={desejaReceberEmCasa}
                            onChange={handleDesejaReceberEmCasaChange}
                        />
                        Desejo Receber em Casa
                    </div>
                    {desejaReceberEmCasa && <FormEntrega />}
                </div>
            }
        </div >
    )

};

export default MeuCarrinho;