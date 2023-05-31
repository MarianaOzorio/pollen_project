import { Link } from 'react-router-dom';

function Sobre() {
    return (
        <div className='mainContainer'>
            <h2 className='defaultSizeTitle'>
                O que é o PollenPoints?
            </h2>
            <p className='defaultSizeParagraph'>
                O PollenPoints é uma loja onde as pessoas colaboradoras da cia podem adquirir produtos exclusivos. Para comprar os produtos é super simples: acumule pollens, nossa moeda de troca, e faça o seu pedido. Você poderá retirar os produtos no escritório ou receber na sua casa sem nenhum custo adicional.
            </p>
            <h2 className='defaultSizeTitle'>
                Como ganhar pollens?
            </h2>
            <p className='defaultSizeParagraph'>
                Existem duas maneiras de você ganhar pollens: depois de concluir algumas tarefas listadas abaixo, e se outra pessoa colaboradora decidir compartilhar os pollens dela com você.
                <br/> 
                <br/>  
                Fique atento ao prazo de validade para não perder os seus pollens. Eles são zerados sempre no dia 31 de dezembro  às 23:59 de cada ano.
                <br/> 
                <br/>    
                Confira a lista de atividades que geram pollens:  
            </p>
            <ul className='defaultSizeParagraph'>
                <li>Preenchimento do Censo</li>
                <li>Participação no Ciclo de Gente</li>
                <li>Conclusão de treinamentos não obrigatórios</li>
                <li>Entrada na cia</li>
                <li>Aniversário de cia</li>
            </ul> 
            <h2 className='defaultSizeTitle'>
                Você pode ainda espelhar seus pollens por aí!
            </h2>
            <p className='defaultSizeParagraph'>
                Não vai utilizar os seus pollens? Ou quer presentear seus colegas? Em <Link to="/MinhaConta">minha conta</Link> você pode compartilhá-los.
            </p>
        </div>
    )
};

export default Sobre