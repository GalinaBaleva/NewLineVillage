import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Navigation from "./pages/Navigation"



function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>

    </>
  )
}

export default App
