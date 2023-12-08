import logo from './MyPicture.jpg';
import './ComponentSuperior.css';

function ComponentSuperior() {
  return (
    <div className="Superior">
      <header className="Superior-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='Introdução'>
            <h1 className='titulo'>William Stofel Da Mota</h1>
            <p>
            Tenho 24 anos e sou estudante da pós graduação de engenharia de software da PUC Minas, formado em engenharia da computação pela faculdade Fundação Engenheiro Salvador
            Arena. Trabalho com automação de processos/RPA (Robotic Process Automation) à 4 anos. Trabalhei pouquissímo tempo como fullstack em um estágio e tenho bem pouca
            experiência em front-end.
            </p>
        </div>
      </header>
    </div>
  );
}

export default ComponentSuperior;
