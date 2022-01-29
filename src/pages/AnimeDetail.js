import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"

export default function AnimeDetail() {
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const params = useParams()

  useEffect(() => {
    async function getDetail() {
      const request = await fetch(
        `https://api.jikan.moe/v4/anime/${params.mal_id}`
      )
      const response = await request.json()

      if (response.hasOwnProperty("error")) {
        return setError(true)
      }

      setDetail(response.data)
      setLoading(false)
    }

    getDetail()
  }, [params])

  if (error) {
    return <h1>Not Found</h1>
  }

  return (
    <>
      <Helmet>
        <title>{detail.title}</title>
      </Helmet>
      <section>
        {loading ? (
          <p>Loading.....</p>
        ) : (
          <>
            <h1 className="anime-title">{detail.title}</h1>
            <div className="anime-info">
              <img src={detail.images.jpg.image_url} alt="anime cover" />
              <table>
                <tbody>
                  <tr>
                    <td>Rank</td>
                    <td>{detail.rank}</td>
                  </tr>
                  <tr>
                    <td>Score</td>
                    <td>{detail.score}</td>
                  </tr>
                  <tr>
                    <td>Genre</td>
                    <td>{detail.genre}</td>
                  </tr>
                  <tr>
                    <td>Season</td>
                    <td>
                      <li>Season: {detail.season}</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{detail.year}</td>
                  </tr>
                  <tr>
                    <td>Synopsis</td>
                    <td>{detail.synopsis}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </>
  )
}
