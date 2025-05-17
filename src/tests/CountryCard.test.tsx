import {describe, it, expect} from "vitest"
import {render, screen} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom"
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
            <MemoryRouter>
                <CountryCard {...mockProps}/>
            </MemoryRouter> 
        )

        expect(screen.getByAltText('Bandeira de Brasil')).toBeDefined()
        expect(screen.getByText('Brasil')).toBeDefined()
        expect(screen.getByText('Brasília')).toBeDefined()
        expect(screen.getByText(1000000)).toBeDefined()
        expect(testData).toMatchSnapshot()
    })

    it('Deve aplicar cardLight quando isDarkMode === false (modo claro)', () => {
        const testData = render(
            <MemoryRouter>
                <CountryCard {...mockProps} isDarkMode={false}/>
            </MemoryRouter> 
        )

        const card = screen.getByText('Brasil').closest('a')

        expect(card?.className).toContain('_cardLight_043c24')
        expect(testData).toMatchSnapshot()
    })

    it('Deve aplicar cardDark quando isDarkMode === true (modo escuro)', () => {
        const testData = render(
            <MemoryRouter>
                <CountryCard {...mockProps} isDarkMode={true}/>
            </MemoryRouter> 
        )

        const card = screen.getByText('Brasil').closest('a')

        expect(card?.className).toContain('_cardDark_043c24')
        expect(testData).toMatchSnapshot()
    })
})