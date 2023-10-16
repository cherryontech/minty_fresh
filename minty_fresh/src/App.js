import './App.css';
import { Route, Routes } from 'react-router-dom';
import Strengths from './pages/Strengths';
import Homepage from './pages/HomePage';



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
      </Routes>
    </div>
  );
}

export default App;
