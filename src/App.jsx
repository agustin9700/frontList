import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layaout from './components/Layaout';
import TableRankGeneral from './components/TableRankGeneral';
import TableRank from './components/TableRank';
import Others from './components/Others';
import OthersRank from './components/OthersRank';


function App() {
  return (
   <Router>
    <Layaout>
      <Routes>
      <Route path="/" element={<TableRankGeneral />} />
      <Route path="/members" element={<TableRank />} />
      <Route path="/others" element={<OthersRank/>} />

      </Routes>

    
    </Layaout>
    
    </Router>
      
  
  )
}

export default App