import React, {useEffect, useState} from "react";
import Requests from './services/Requests';
//https://www.skcript.com/svr/using-webpack-with-react-typescript/

const App: React.FC = (props) => {
  const [data, dataSet] = useState<any>(null)
  
  const hadleGetCadastro = () => {
    const response = Requests.Departamento.show();

    response.then(
      (r) => console.log(r.data)
    ) 
}

async function hadleGetCadastro1() {
  const {data} = await Requests.Departamento.show();
  console.log(data)

}

useEffect(():void => {
  hadleGetCadastro1()


}, [])



  return <div>
    
    <button
    onClick={():void=> hadleGetCadastro()}
    >sdasdas</button>
    Teste TS marcio</div>;
};

export default App;