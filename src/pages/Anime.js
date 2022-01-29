import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

export default function Anime() {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState("")

  useEffect(() => {
    async function getAnime() {
      const request = await fetch("https://api.jikan.moe/v4/top/anime")
      const response = await request.json()

      setAnime(response.data)
      setLoading(false)
    }

    getAnime()
  }, [])

  async function searchAnime(keyword) {
    const request = await fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`)
    const response = await request.json()

    setAnime(response.data)
    setLoading(false)
  }

  return (
    <>
      <Helmet>
        <title>Anime</title>
      </Helmet>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          searchAnime(keyword)
        }}
      >
        <input
          type="text"
          placeholder="Search anime..."
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button>Search</button>
      </form>
      <section>
        {loading ? (
          <p>Loading.....</p>
        ) : (
          <ul>
            {anime.map((anm) => (
              <li key={anm.mal_id}>
                <img
                  className="list-cover"
                  src={anm.images.jpg.image_url}
                  alt="anime cover"
                />
                <h3 className="list-title">
                  <Link to={`/anime/${anm.mal_id}`}>{anm.title}</Link>
                </h3>
                <span className="list-score">{anm.score}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
