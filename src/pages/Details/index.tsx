import React, { useEffect, useState } from "react";
import styles from "./Details.module.css"
import { Link, useParams } from "react-router-dom";
import { getCountryByName } from "../../service/api";
import { ArrowLeft } from "lucide-react";

interface DetailsProps {
    isDarkMode: boolean
}

const Details:React.FC<DetailsProps> = ({isDarkMode}) => {
    const {name} = useParams()
    const [country, setCountry] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    console.log(country)
    
    useEffect(() => {
        const fetchCountry = async () => {
            try {
            const data = await getCountryByName(name || "")

            setCountry(data[0])
            } catch (error) {
            console.log("Erro ao buscar detalhe do país.", error)
            }finally{
                setLoading(false)
            }
        }
        
        fetchCountry()
    }, [name]) 

    if(loading) {
        return(
            <div className={`${styles.loading} ${isDarkMode ? styles.loadingDark : styles.loadingLight}`}>
                <div className={styles.spinner}/>
            </div>
        )
    }

    if(!country) {
        return(
            <div className={styles.content}>
                <h1>País não encontrado.</h1>
            </div>
        )
    } 

    return(
        <div className={`${styles.container} ${isDarkMode ? styles.containerDark : styles.containerLight}`}>
            <div className={styles.content}>
                <Link className={`${styles.backButton} ${isDarkMode ? styles.backButtonDark : styles.backButtonLight}`} to={"/"}>
                    <ArrowLeft
                        size={20}
                    />
                    Voltar
                </Link>
                <div className={styles.grid}>
                    <img 
                        className={styles.image} 
                        src={country.flags.svg} 
                        alt={country.name.common} 
                    />
                    <div>
                        <h1 className={styles.title}>{country.name.common}</h1>
                        <div className={styles.infoGrid}>
                            <div>
                                <p className={styles.info}>
                                    <span className={styles.label}>
                                        Nome Nativo:{' '} 
                                    </span>
                                    {Object.values(country.name.nativeName || {})[0].common || "N/A"}
                                </p>
                                <p className={styles.info}>
                                    <span className={styles.label}>
                                        População:{' '} 
                                    </span>
                                    {country.population.toLocaleString('pt-BR') || "N/A"}
                                </p>
                                <p className={styles.info}>
                                    <span className={styles.label}>
                                        Região:{' '} 
                                    </span>
                                    {country.region || "N/A"}
                                </p>
                                <p className={styles.info}>
                                    <span className={styles.label}>
                                        Sub-Região:{' '} 
                                    </span>
                                    {country.subregion || "N/A"}
                                </p>
                                <p className={styles.info}>
                                    <span className={styles.label}>
                                        Capital:{' '} 
                                    </span>
                                    {country.capital?.[0] || "N/A"}
                                </p>
                            </div>
                            <div>
                                <p className={styles.info}>
                                    <span className={styles.label}>
                                        Domínio de Topo:{' '} 
                                    </span>
                                    {country.tld?.[0] || "N/A"}
                                </p>
                                <p className={styles.info}>
                                    <span className={styles.label}>
                                        Moedas:{' '} 
                                    </span>
                                    {Object.values(country.currencies || {}).map((currency:any) => currency.name).join(", ") || "N/A"}
                                </p>
                                <p className={styles.info}>
                                    <span className={styles.label}>
                                        Idiomas:{' '} 
                                    </span>
                                    {Object.values(country.languages || {}).join(", ") || "N/A"}
                                </p>
                            </div>
                            {country.borders && (
                                <div className={styles.borderContainer}>
                                    <h2 className={styles.borderTitle}>Países Fronteiriços:</h2>
                                    <div className={styles.borderItems}>
                                        {country.borders.map((border:string) => (
                                            <span className={`${styles.borderTag} ${isDarkMode ? styles.borderTagDark : styles.borderTagLight}`}>
                                                {border}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
