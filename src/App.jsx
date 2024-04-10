import { Footer, Navbar, SubNav } from "./components"
import { Home, Politics } from "./pages"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SubNav />
      <div className="my-2 mx-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="politics" element={<Politics />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
