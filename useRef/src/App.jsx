import Counter from './components/Counter';
import './App.css';

function App(){
  const arr = Array.from(Array(10).keys());
  return <div>{arr.map(val=><Counter key = {val} id={val + 1}/>)}</div>
}

export default App;