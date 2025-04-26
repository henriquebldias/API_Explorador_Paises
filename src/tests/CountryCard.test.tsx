import {describe, it, expect} from "vitest"
import {render, screen} from "@testing-library/react"
import {BrowserRouter} from "react-router-dom"
import CountryCard from "../components/CountryCard"

describe('CountryCard tests', () => {
    const mockProps = {
        flags: "https://flag.com/flag.svg",
        name: "Brasil",
        population: 1000000,
        capital: "Brasília",
        isDarkMode: true
    }

    it('Deve renderizar as informações do país corretamente', () => {
        const testData = render(
            <BrowserRouter>
                <CountryCard {...mockProps}/>
            </BrowserRouter> 
        )

        expect(screen.getByText('Brasil')).toBeDefined()
        expect(testData).toMatchSnapshot()
    })
})