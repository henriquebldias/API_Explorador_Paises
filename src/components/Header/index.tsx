import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import {Moon, Sun} from "lucide-react";

interface HeaderProps {
    isDarkMode: boolean
    toogleDarkMode: () => void
}

const Header: React.FC<HeaderProps> = ({isDarkMode, toogleDarkMode}) => {
    return (
        <header className={`${styles.header} ${isDarkMode ? styles.headerDark: styles.headerLight}`}>
            <div className={styles.container}>
                <Link className={styles.title} to="/">Onde no mundo?</Link>
                <button className={styles.themeButton} onClick={toogleDarkMode}>
                    {isDarkMode ? <Sun size={20}/>:<Moon size={20}/>}
                    <span>{isDarkMode ? "Modo Claro" : "Modo Escuro"}</span>
                </button>
            </div>
        </header>
    )
}

export default Header