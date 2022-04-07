import Home from './pages/Home';

const mockData = [
  {token: 'KLV', balance: '10,250.50'},
  {token: 'DVK', balance: '50,250.71'},
  {token: 'KFI', balance: '10'},
]

function App() {
  return <Home data={ mockData }/>
}

export default App;
