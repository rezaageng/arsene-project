import { Route, Routes } from "react-router-dom"
import "./App.css"
import AnimeTop from "./pages/AnimeTop"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { Link } from "react-router-dom"

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
            <Link to="/top-anime">Top Anime</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="top-anime" element={<AnimeTop />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
