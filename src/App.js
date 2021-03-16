import './App.css';
import React/*,{Component}*/ from 'react'
import api from './api'

function App() {
  let [responseData, setResponseData] = React.useState([]);

  async function pegaDado(){
    const response = await api.get('star wars')
    setResponseData(response.data)
  }

  /*React.useEffect( () => {
    console.log(responseData)
  },[responseData, setResponseData]);*/

  return (
    <div className="App">
      <h1>Listar os filmes</h1>
      <button name="botao" type='button' onClick={pegaDado}>Botao</button>
      {responseData.map(data => (
        <li key={data.show.id}>
          <h2>Titulo do filme: {data.show.name}</h2>
          <p>{data.show.summary} </p>
        </li>
      ))}
    </div>
  );
}

/*class App extends Component {
  state={
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('')
    this.setState({ filmes: response.data})
    console.log(response.data)
  }
  render() {
    return(
      <h1>Lista de filmes</h1>
    )
  }
}*/

export default App;
