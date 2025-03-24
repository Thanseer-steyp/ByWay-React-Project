import './App.css';
import Home from './components/pages/Home';
import Course from './components/pages/Course';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='course' element={<Course />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;