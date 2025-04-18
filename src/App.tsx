import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toogleDarkMode = () => {
      setIsDarkMode(!isDarkMode)
  }

  return (
    <Router>
     <Header isDarkMode={isDarkMode} toogleDarkMode={toogleDarkMode}/>
    </Router>
  );
}

export default App;