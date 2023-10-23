// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Strengths from './pages/Strengths/Strengths';
import Homepage from './pages/HomePage';
import './App.scss';
import { useState } from 'react';
import Results from './pages/Results/Results';


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
      </Routes>
    </div>
  );
}

export default App;
