import React, { Children, createContext, useState } from 'react'

const UiContext = createContext();

export const UiProvider = ({ children }) => {

    const [ocultarMenu, setocultarMenu] = useState(false)

    const showMenu = () => {
        setocultarMenu(false)
    }

    const hideMenu = () => {
        setocultarMenu(true)
    }

    return (
        <UiContext.Provider value={{
            showMenu,
            hideMenu,
            ocultarMenu,
        }}>
            {children}
        </UiContext.Provider>
    )
}
