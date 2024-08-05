import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data'
import Tours from './components/Tours';


function App() {
  
  const [tours,setTours]=useState(data);
  function sortOut(id)
{
  let newTour=tours.filter(tour=>tour.id!==id);
  setTours(newTour);
}
if(tours.length===0)
{
  return(
    <div className='refresh'>
      <h3 >No Tour left</h3>
      <button onClick={()=>setTours(data)} className='btn-white'>Refresh</button>
    </div>
  )
}
  return (
    <div >
      <Tours tours={tours} sortOut={sortOut} className='container'></Tours>
    </div>
  );
}

export default App;
