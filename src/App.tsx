import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import { useState } from 'react';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

const toogleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
}

  return (
    <Router>
     <Header isDarkMode={isDarkMode} toogleDarkMode={toogleDarkMode}/>
     <Routes>
        <Route path='/' element={<Home isDarkMode={isDarkMode}/>}/>
        <Route path='/country/:name' element={<Details isDarkMode={isDarkMode}/>}/>
     </Routes>
    </Router>
  );
}

export default App;