import { Route, Routes } from "react-router-dom"
import "./App.css"
import Anime from "./pages/Anime"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { Link } from "react-router-dom"
import AnimeDetail from "./pages/AnimeDetail"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/anime">Anime</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="anime" element={<Anime />} />
        <Route path="anime/:mal_id" element={<AnimeDetail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
