// componente para botão 
// descrição dos parâmetros:
// children: texto do botão
// onClick: função que será chamada ao clicar no botão
// 
const Button = ({ children, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  