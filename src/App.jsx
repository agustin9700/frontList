import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layaout from './components/Layaout';
import TableRankGeneral from './components/TableRankGeneral';
import TableRank from './components/TableRank';


function App() {
  return (
   <Router>
    <Layaout>
      <Routes>
      <Route path="/" element={<TableRankGeneral />} />
      <Route path="/members" element={<TableRank />} />

      </Routes>

    
    </Layaout>
    
    </Router>
      
  
  )
}

export default App