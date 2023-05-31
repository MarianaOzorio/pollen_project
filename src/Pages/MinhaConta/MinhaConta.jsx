import React, { useContext, useEffect } from 'react';

import './MinhaConta.css';

import Line from '../../Components/Line/Line';
import storage from '../../Context/Context';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Table from '../../Components/Table/Table';
import InputMd from '../../Components/InputMd/InputMd';
import TextArea from '../../Components/TextArea/TextArea';


function MinhaConta() {

    const { pollenBalance, getPollenBalance } = useContext(storage);

    useEffect(() => {
        getPollenBalance();
    }, []);

    return (
        <div className='mainContainer'>
            <div>
                <h2 className='amountPollensTitle'>
                    {`Você tem ${pollenBalance} pollens acumulados`}
                </h2>
                <Line />
            </div>
            <h2 className='secondaryTitle'>
                Veja aqui o seu histórico de pedidos
            </h2>


            {/* <table className='tableMinhaConta'>
                <thead>
                    <tr>
                        <td><strong>Data do Pedido</strong></td>
                        <td><strong>Produtos</strong></td>
                        <td><strong>Total do Pedido</strong></td>
                        <td><strong>Status do Pedido</strong></td>
                    </tr>
                    <tr>
                        <td>09/05/2023</td>
                        <td>Camisa Tamanho P</td>
                        <td>100 Pollens</td>
                        <td>Entregue - Retirada no Bees</td>
                    </tr>
                    <tr>
                        <td>20/01/2023</td>
                        <td>Caneca 400ml </td>
                        <td>50 Pollens</td>
                        <td>Entregue - Retirada no Bees</td>
                    </tr>
                    <tr>
                        <td>09/05/2023</td>
                        <td>Garrafa de Inox</td>
                        <td>50 Pollens</td>
                        <td>Entregue - Retirada no Bees</td>
                    </tr>
                </thead>
            </table> */}

            <section className='minhaContaForms'>
                <h2 className='secondaryTitle'>Não vai usar seus pollens? Transfira para outra pessoa!</h2>
                <div className='columnForms'>
                    <label>Digite o e-mail da pessoa que vai receber os pollens:</label>
                    <InputMd />
                    <label>Quantos pollens deseja enviar?</label>
                    <InputMd />
                    <label>Deixe uma mensagem de carinho!</label>
                    <TextArea />
                    <PrimaryButton
                        btn="Enviar"
                    />
                </div>
            </section>
        </div>
    )
};


export default MinhaConta;
