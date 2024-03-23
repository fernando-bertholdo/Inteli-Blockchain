import logo from '../src/assets/logo.svg';
import bg from '../src/assets/background-ib.svg';
import './App.css';

function App() {

  return (
    
    <div className="content mx-auto" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '70rem'}}>

      <div className="header p-4 text-center text-white">

        <div className="logo">

          <img src={logo} className="Blockas-logo" alt="logo do blockas" />

        </div>

      </div>

      <div className="title text-white">

        <h1>Receba sua Proof-Of-Attandance NFT</h1>

      </div>

      <div className="p-4">

        <p className="text-white">

          Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia.

        </p>

        <p className="text-white">

          Ainda não tem uma carteira? Acesse o link e crie a sua já:{" "}
          <a className="text-blue-500" href="https://www.sepolia.org/"> Clique aqui </a>

        </p>

        {/* componente para  */}
        <form className="mt-4">

          <label className="block mb-2 text-white">
            Seu nome
          </label>

          <label className="p-2 block text-white">

            Este nome será gravado no seu NFT para provar sua presença

          </label>

          <input

            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder='Nome'

          />

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

        </form>

      </div>
    
    </div>

  );
  
}

export default App;

