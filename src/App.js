import { Route, Routes } from "react-router-dom"
import "./App.css"
import Anime from "./pages/Anime"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { Link } from "react-router-dom"
import AnimeDetail from "./pages/AnimeDetail"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/anime">Anime</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="anime" element={<Anime />} />
        <Route path="anime/:mal_id" element={<AnimeDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
