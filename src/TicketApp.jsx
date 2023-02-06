import React from "react"
import { BrowserRouter } from "react-router-dom"
import { UiProvider } from "./context/UiContext"
import { RouterPage } from "./pages/RouterPage"

function TicketApp() {

  return (
    <BrowserRouter >
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </BrowserRouter>
  )
}

export default TicketApp
