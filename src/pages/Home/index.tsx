import React from "react";
import { useEffect, useState } from 'react';
import { getAllCountries } from "../../service/api";
import CountryCard from "../../components/CountryCard";
import styles from "./Home.module.css"

const Home = () => {
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
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.grid}>
                    {
                        countries.map((country: any) => (
                            <CountryCard
                                flags={country.flags.svg}
                                name={country.name.common}
                                population={country.population}
                                capital={country.capital?.[0]}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Home