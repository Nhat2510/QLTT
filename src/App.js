import logo from './logo.svg';
import Global from './global';
import Context from './context';

function App() {
  return (
    <div className="App">
      <Context>
      <Global />
      </Context>
    </div>
  );
}

export default App;
