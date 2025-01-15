import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the new HomePage component
import DiplomasPage from './pages/DiplomasPage';
import RegistrationPage from './pages/RegistrationPage';
import CoursePage from './pages/CoursePage';
import CourseDetail from './components/CourseDetail';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/diplomas">Diplomas</Link>
              </li>
              <li>
                <Link to="/registration">Register</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Add the HomePage */}
            <Route path="/diplomas" element={<DiplomasPage />} />
            <Route path="/diplomas/:diplomaId" element={<CoursePage />} />
            <Route path="/diplomas/:diplomaId/:moduleId" element={<CourseDetail />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
