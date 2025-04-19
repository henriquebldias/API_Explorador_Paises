import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { getAllCountries } from './service/api';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [countries, setCountries] = useState([])

const toogleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
}

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries()

        setCountries(data)
      } catch (error) {
        console.log("Erro ao buscar países.", error)
      }
    }

    fetchCountries()
  }, []) 

  console.log(countries)

  return (
    <Router>
     <Header isDarkMode={isDarkMode} toogleDarkMode={toogleDarkMode}/>
    </Router>
  );
}

export default App;