import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function AnimeTop() {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getAnime() {
      const request = await fetch("https://api.jikan.moe/v4/top/anime")
      const response = await request.json()

      setAnime(response.data)
      setLoading(false)
    }

    getAnime()
  }, [])

  return (
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
  )
}
