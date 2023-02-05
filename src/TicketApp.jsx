import React from "react"
import { BrowserRouter } from "react-router-dom"
import { RouterPage } from "./pages/RouterPage"

function TicketApp() {

  return (
    <BrowserRouter >
      <RouterPage />
    </BrowserRouter>
  )
}

export default TicketApp
