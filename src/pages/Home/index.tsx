import React from "react";
import { useEffect, useState } from 'react';
import { getAllCountries } from "../../service/api";
import CountryCard from "../../components/CountryCard";
import styles from "./Home.module.css"

interface HomeProps {
    isDarkMode: boolean
}

const Home:React.FC<HomeProps> = ({isDarkMode}) => {
    const [countries, setCountries] = useState([])

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

    return(
        <div className={`${styles.container} ${isDarkMode ? styles.containerDark : styles.containerLight}`}>
            <div className={styles.content}>
                <div className={styles.grid}>
                    {
                        countries.map((country: any) => (
                            <CountryCard 
                                key={country.name.common}
                                flags={country.flags.svg}
                                name={country.name.common}
                                population={country.population}
                                capital={country.capital?.[0]}
                                isDarkMode={isDarkMode}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Home