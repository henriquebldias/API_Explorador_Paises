import React from "react";
import { useEffect, useState } from 'react';
import { getAllCountries, getCountryByRegion } from "../../service/api";
import CountryCard from "../../components/CountryCard";
import styles from "./Home.module.css"
import { Search } from "lucide-react";

interface HomeProps {
    isDarkMode: boolean
}

const Home:React.FC<HomeProps> = ({isDarkMode}) => {
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectRegion, setSelectRegion] = useState("")

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const data = selectRegion ? await getCountryByRegion(selectRegion) : await getAllCountries() 
    
            setCountries(data)
          } catch (error) {
            console.log("Erro ao buscar países.", error)
          }
        }
        
        fetchCountries()
      }, [selectRegion]) 

      const filterCountries = countries.filter((country:any) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))

      const regions = [
        {value: "Americas", label: "Américas"},
        {value: "Europe", label: "Europa"},
        {value: "Asia", label: "Ásia"},
        {value: "Africa", label: "África"},
        {value: "Oceania", label: "Oceania"},
      ]

    return(
        <div className={`${styles.container} ${isDarkMode ? styles.containerDark : styles.containerLight}`}>
            <div className={styles.content}>
                <div className={styles.filters}>
                    <div className={styles.searchContainer}>
                        <Search
                            className={styles.searchIcon}
                            size={20}
                            color={isDarkMode ? "white" : "#374151"}
                        />
                        <input 
                            type="text" 
                            placeholder="Buscar país..." 
                            className={`${styles.searchInput} ${isDarkMode ? styles.searchInputDark : styles.searchInputLight}`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <select 
                        value={selectRegion}
                        onChange={(e) => setSelectRegion(e.target.value)}
                        className={`${styles.selectRegion} ${isDarkMode ? styles.selectRegionDark : styles.selectRegionLight}`}
                    >
                        <option value="">
                            Filtrar por região
                        </option>
                        {regions.map((region) => (
                            <option key={region.value} value={region.value}>{region.label}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.grid}>
                    {
                        filterCountries.map((country: any) => (
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