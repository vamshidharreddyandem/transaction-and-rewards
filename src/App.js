import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './Routes';
function App() {
  return (
    <div className="transactions-app">
      <Header title='Transactions' />
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
