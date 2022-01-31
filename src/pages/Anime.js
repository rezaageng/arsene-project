import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

export default function Anime() {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState("")
  const [notFound, setNotFound] = useState(false)

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

    response.data.length === 0 ? setNotFound(true) : setAnime(response.data)
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
          className="search-input"
          type="text"
          placeholder="Search anime..."
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </form>
      <section>
        {loading ? (
          <p>Loading.....</p>
        ) : notFound ? (
          <p>Anime not Found</p>
        ) : (
          <ul className="anime-list">
            {anime.map((anm) => (
              <li key={anm.mal_id}>
                <Link to={`/anime/${anm.mal_id}`}>
                  <img
                    className="list-cover"
                    src={anm.images.jpg.large_image_url}
                    alt="anime cover"
                  />
                  <h3 className="list-title">{anm.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
