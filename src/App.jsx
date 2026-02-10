import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Knowledge from './Knowledge';
import Article from './Article';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
