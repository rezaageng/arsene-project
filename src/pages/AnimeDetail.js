import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function AnimeDetail() {
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    async function getDetail() {
      const request = await fetch(
        `https://api.jikan.moe/v4/anime/${params.mal_id}`
      )
      const response = await request.json()

      setDetail(response.data)
      setLoading(false)
    }

    getDetail()
  }, [params])

  return (
    <section>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <>
          <h1 className="anime-title">{detail.title}</h1>
          <img src={detail.images.jpg.image_url} alt="anime cover" />
          <ul>
            <li>{detail.score}</li>
            <li>{detail.rank}</li>
            <li>{detail.synopsis}</li>
            <li>{detail.season}</li>
            <li>{detail.year}</li>
          </ul>
        </>
      )}
    </section>
  )
}