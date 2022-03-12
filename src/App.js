import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Main from './pages/main';
import Login from './pages/login';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/home" exact element={<Main/>} />
        </Routes>
      </Router>
      <div className="footer" style={{ width: '100%', height: '2.5rem', lineHeight: '2.5rem', margin: 'auto' }}>
					Made with ❤️ by{' '}
						<a
							href="mailto:jain.38@iitj.ac.in"
							target="_blank"
							rel="noreferrer"
						>
							Darshit K Jain [B19EE024]
						</a>
				</div>
    </div>
  );
}

export default App;
