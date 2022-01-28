import { useEffect, useState } from "react"

export default function AnimeTop() {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getArticles() {
      const request = await fetch("https://api.jikan.moe/v4/top/anime")
      const response = await request.json()

      setAnime(response.data)
      setLoading(false)
      console.log(response.data)
    }

    getArticles()
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
                className="cover-img"
                src={anm.images.jpg.image_url}
                alt="anime cover"
              />
              <h3 className="anime-title">{anm.title}</h3>
              <span className="anime-score">{anm.score}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
