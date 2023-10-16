// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Strengths from './pages/Strengths/Strengths';
import Homepage from './pages/HomePage';



function App() {
  return (
    <div className="bg-background-main max-h-screen">
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
