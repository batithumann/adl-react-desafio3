import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Formulario from "./components/Formulario";
import { BaseColaboradores } from "./components/BaseColaboradores";

function App() {
  return (
    <div className="App">
      <Formulario colaboradoresIniciales={BaseColaboradores} />
    </div>
  );
}

export default App;
