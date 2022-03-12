import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Main from './pages/main';
import Login from './pages/login';
import {
  Routes, 
  Route,
  HashRouter
} from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/home" element={<Main/>} />
        </Routes>
      </HashRouter>
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
