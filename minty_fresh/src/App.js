// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Strengths from './pages/Strengths/Strengths';
import Homepage from './pages/HomePage/HomePage';
import FutureGoals from './pages/FutureGoals/FutureGoals';
import './App.scss';
import GrowthOpportunites from './pages/GrowthOpportunities/GrowthOpportunities';


function App() {
  return (
    <div className="app">
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
            path="/growth"
            element={<GrowthOpportunites/>}
          />
        <Route
            path="/futuregoals"
            element={<FutureGoals/>}
        />
      </Routes>

    </div>
  );
}

export default App;
