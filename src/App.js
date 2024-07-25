import './App.css';
import PizzaDetail from './Components/ProjectDetail/PizzaDetail';
import TextSummary from './Components/ProjectDetail/TextSummary';
import { pizza } from './Components/ProjectDetail/Pics';
import { ts } from './Components/ProjectDetail/ts';
import { Route,Routes } from 'react-router-dom';
import FullComp from './Components/FullComp';
import ClonoFusion from './Components/ProjectDetail/ClonoFusion';
import { cf } from './Components/ProjectDetail/Cf';
import MovieClone from './Components/ProjectDetail/MovieClone';
import { mc } from './Components/ProjectDetail/mc';
import Certificates from './Components/Certifications/Certificates';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FullComp/>}/>
        <Route path='/pizza' element={<PizzaDetail images={pizza}/>}/>
        <Route path='/ts' element={<TextSummary images={ts}/>}/>
        <Route path='/cf' element={<ClonoFusion images={cf}/>}/>
        <Route path='/mc' element={<MovieClone images={mc}/>}/>
        <Route path='/certificates' element={<Certificates/>}/>
      </Routes>
   
    </div>
  
  );
}

export default App;
