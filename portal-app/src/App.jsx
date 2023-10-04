import { useState } from 'react';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import NewsList from './components/NewsList';
import Login from './Pages/Login';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (userToken) => {
    setToken(userToken);
  };

  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path="/login" element={token ? <Navigate to="/newslist" /> : <Login onLogin={handleLogin} />} />
          <Route
            path="/newslist"
            element={token ? <NewsList token={token} /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
