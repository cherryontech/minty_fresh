import './App.css';
import { Route, Routes } from 'react-router-dom';
import Strengths from './pages/Strengths';
import Homepage from './pages/HomePage';
import PersonaName from './pages/PersonaName';
import BtnPersonaName from './pages/BtnPersonaName';
import BtnPastAcc from './pages/BtnPastAcc';
import PastAcc from './pages/PastAcc';
import AboutYourself from './pages/AboutYourself';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route
            path="/"
            element={<Homepage/>}
          />
        <Route
            path="/strengths"
            element={<Strengths/>}
          />
          <Route
            path="/personaname"
            element={<PersonaName/>}
          />

          <Route 
          path="/btnpersonaname"
          element={<BtnPersonaName/>}
          />

          <Route 
          path="/btnpastacc"
          element={<BtnPastAcc/>}
          />

          <Route 
          path="/pastacc"
          element={<PastAcc/>}
          />

          <Route 
          path="/aboutyourself"
          element={<AboutYourself/>}
          />
      </Routes>
    </div>
  );
}

export default App;
