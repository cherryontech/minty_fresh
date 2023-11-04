// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Strengths from './pages/Strengths/Strengths';
import Homepage from './pages/HomePage/HomePage';
import FutureGoals from './pages/FutureGoals/FutureGoals';
import './App.scss';
import { useState } from 'react';
import Results from './pages/Results/Results';
import GrowthOpportunites from './pages/GrowthOpportunities/GrowthOpportunities';
import PersonaName from './pages/PersonaName';
import BtnPersonaName from './pages/BtnPersonaName';
import BtnPastAcc from './pages/BtnPastAcc';
import PastAcc from './pages/PastAcc';
import AboutYourself from './pages/AboutYourself/AboutYourself';
import InsertNameDesktop from './pages/InsertNameDesktop/InsertNameDesktop';
import LetsGetStartedDesktop from './pages/LetsGetStartedDesktop/LetsGetStartedDesktop';

function App() {

  // This is where the info from the strengths form will be stored (it is starting as empty strings and will be passed into different pages through props)
  const [strengths, setStrengths] = useState({
    compliments: '',
    activities:'',
    methodologies: ''
  });

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Homepage/>}
        />
        <Route
            path="/strengths"
            element={
              <Strengths 
                strengths={strengths}
                setStrengths={setStrengths}
              />}
        />
        <Route
          path="/results"
          element={
            <Results
              strengths={strengths}
              setStrengths={setStrengths}
            />
          }
        /> 
        <Route
            path="/growth"
            element={<GrowthOpportunites/>}
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
        <Route
            path="/futuregoals"
            element={<FutureGoals/>}
        />
        
        <Route
          path="/insertnamedesktop"
          element={<InsertNameDesktop/>}
          />
        
        <Route
        path="/letsgetstarteddesktop"
        element={<LetsGetStartedDesktop/>}
        />
      </Routes>

    </div>
  );
}

export default App;
