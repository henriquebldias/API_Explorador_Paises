import React from "react";
import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css"

interface CountryCardProps {
    flags: string
    name: string
    population: number
    capital: string
}

const CountryCard: React.FC<CountryCardProps> = ({
    flags,
    name,
    population,
    capital
}) => {
    return (
        <Link to={"/"} className={styles.card}>
            <img src={flags} alt={name} className={styles.image}/>
            <div className={styles.content}>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.info}>
                    <span className={styles.label}>População: </span>
                    {population}
                </p>
                <p className={styles.info}>
                    <span className={styles.label}>Capital: </span>
                    {capital}
                </p>
            </div>
        </Link>
    )
}

export default CountryCard