import logo from '../src/assets/logo.svg'; // Importa o logotipo do diretório de assets
import bg from '../src/assets/background-ib.svg'; // Importa o plano de fundo do diretório de assets
import './App.css'; // Importa o arquivo CSS para estilizar o componente

function App() {

  return (
      
    <div className="content mx-auto" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '70rem'}}>
      {/* Define a div principal com a classe "content" e formatação/exibição do bg */}
      
      <div className="header p-4 text-center text-white">
        {/* Define a div do cabeçalho com classes de estilo */}
        
        <div className="logo">
          {/* Define a div da logo */}
          <img src={logo} className="Blockas-logo" alt="logo do blockas" />
          {/* Exibe a logo */}
        </div>

      </div>

      <div className="titulo text-white">

        <h1>Receba sua Proof-Of-Attandance NFT</h1>
        {/* Exibe o título do conteúdo*/}
      </div>

      <div className="p-4">
        
        <p className="text-white">

          Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia.
        </p>

        <p className="text-white">

          Ainda não tem uma carteira? Acesse o link e crie a sua já:{" "}
          <a className="text-blue-500" href="https://www.sepolia.org/"> Clique aqui </a>
          {/* Exibe o link */}
        </p>

        {/* componente para  */}
        <form className="mt-4">
          {/* Cria um elemnto o de formulário com estilização */}

          <label className="block mb-2 text-white">
            Seu nome
          </label>

          <label className="p-2 block text-white">
            Este nome será gravado no seu NFT para provar sua presença
          </label>
          {/* Cria um rótulo explicativo para o campo de nome */}
          <input
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder='Nome'
          />
          {/* Cria um campo de entrada para o nome */}
          <label className="block mb-2 mt-4 text-white">
            Email
          </label>

          <label className="p-2 block text-white">
            Email para receber novidades
          </label>

          <input
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder='your.email@email.com'
          />

          <label className="block mb-2 mt-4 text-white">
            Wallet
          </label>

          <label className="p-2 block text-white">
            Carteira para receber o NFT na rede Sepolia
          </label>

          <input
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder='0x00...0000'
          />

          <button className="bg-blue-500 p-2 text-white rounded-md mt-4 w-full">
            Gerar NFT
          </button>
          {/* Cria um botão com conteúdo de texto e estilização do elemtno */}
        </form>

      </div>
    
    </div>

  );
  
}

export default App;
