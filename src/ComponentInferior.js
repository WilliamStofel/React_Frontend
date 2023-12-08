import Team from './teamwork.jpg';
import './ComponentInferior.css';

function ComponentSuperior() {
  return (
    <div className="Inferior">
      <header className="Inferior-header">
        <img src={Team} className="LogoTeam" alt="logo" /> 
        <div className='Introdução-Dicas'>
            <h1 className='titulos'>Dicas para Carreira Profissional</h1>
            <h4 >7 Dicas para ter mais motivação e sucesso profissional</h4>
            <p>
            Já parou para pensar que motivação e sucesso profissional estão totalmente ligados? Em um mundo que se transforma de maneira acelerada, quem tem proatividade consegue acesso ao novo para abraçar as melhores oportunidades. Se você ainda não despertou esse interesse pelo crescimento, saiba que nunca é tarde para começar.
              <a
            className="App-link"
            href='https://blogcarreiras.cruzeirodosuleducacional.edu.br/motivacao-e-sucesso-profissional'
            target="_blank"
            rel="noopener noreferrer"
              >
                Clique Aqui Para Ler Mais.
            </a>
            </p>
            <h4 >15 dicas para mandar bem na entrevista de emprego</h4>
            <p>
            confira essa seleção de 15 dicas para mandar bem. Entre conselhos de especialistas, consultados pela Exame e pelo Na Prática, e sugestões baseadas no que diz a ciência, confira o que aumenta suas chances de ser escolhido – ou, como mandar bem na entrevista de emprego.
              <a
            className="App-link"
            href='https://napratica.org.br/dicas-mandar-bem-na-entrevista-de-emprego/'
            target="_blank"
            rel="noopener noreferrer"
              >
                Clique Aqui Para Ler Mais.
            </a>
            </p>
        </div>
      </header>
    </div>
  );
}

export default ComponentSuperior;
