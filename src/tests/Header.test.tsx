import {describe, it, expect, vi} from "vitest"
import {fireEvent, render, screen} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom"
import Header from "../components/Header"

describe('Header tests', () => {
    it('Deve renderizar texto do botão de alterar cor do tema no modo claro', () => {
        const mockToogle = vi.fn()
        
        const testData = render(
            <MemoryRouter>
                <Header 
                    isDarkMode={false}
                    toogleDarkMode={mockToogle}
                />
            </MemoryRouter> 
        )

        expect(screen.getByText('Onde no mundo?')).toBeDefined()
        expect(screen.getByText('Modo Escuro')).toBeDefined()
        expect(testData).toMatchSnapshot()
    })

    it('Deve renderizar texto do botão de alterar cor do tema no modo escuro', () => {
        const mockToogle = vi.fn()
        
        const testData = render(
            <MemoryRouter>
                <Header 
                    isDarkMode={true}
                    toogleDarkMode={mockToogle}
                />
            </MemoryRouter> 
        )

        expect(screen.getByText('Onde no mundo?')).toBeDefined()
        expect(screen.getByText('Modo Claro')).toBeDefined()
        expect(testData).toMatchSnapshot()
    })

    it('Deve aplicar headerLight quando isDarkMode === false (modo claro)', () => {
        const mockToogle = vi.fn()

        const testData = render(
            <MemoryRouter>
                <Header 
                    isDarkMode={false}
                    toogleDarkMode={mockToogle}
                />
            </MemoryRouter> 
        )

        const header = screen.getByText('Onde no mundo?').closest('header')

        expect(header?.className).toContain('_headerLight_63c2ea')
        expect(testData).toMatchSnapshot()
    })

    it('Deve aplicar headerDark quando isDarkMode === true (modo escuro)', () => {
        const mockToogle = vi.fn()

        const testData = render(
            <MemoryRouter>
                <Header 
                    isDarkMode={true}
                    toogleDarkMode={mockToogle}
                />
            </MemoryRouter> 
        )

        const header = screen.getByText('Onde no mundo?').closest('header')

        expect(header?.className).toContain('_headerDark_63c2ea')
        expect(testData).toMatchSnapshot()
    })

    it('Chama função toggleDarkMode quando botão de tema é clicado no modo claro', () => {
        const mockToogle = vi.fn()
        
        const testData = render(
            <MemoryRouter>
                <Header 
                    isDarkMode={false}
                    toogleDarkMode={mockToogle}
                />
            </MemoryRouter> 
        )

        fireEvent.click(screen.getByText('Modo Escuro'))

        expect(mockToogle).toHaveBeenCalled()
        expect(testData).toMatchSnapshot()
    })

    it('Chama função toggleDarkMode quando botão de tema é clicado no modo escuro', () => {
        const mockToogle = vi.fn()
        
        const testData = render(
            <MemoryRouter>
                <Header 
                    isDarkMode={true}
                    toogleDarkMode={mockToogle}
                />
            </MemoryRouter> 
        )

        fireEvent.click(screen.getByText('Modo Claro'))

        expect(mockToogle).toHaveBeenCalled()
        expect(testData).toMatchSnapshot()
    })
})