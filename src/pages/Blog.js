import { useEffect, useState } from "react"

export default function Blog() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getArticles() {
      const request = await fetch("https://animechan.vercel.app/api/quotes")
      const response = await request.json()

      setArticles(response)
      setLoading(false)
      console.log(response)
    }

    getArticles()
  }, [])

  return (
    <section>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <div>
          {articles.map((article) => (
            <article key={article.quote}>{article.anime}</article>
          ))}
        </div>
      )}
    </section>
  )
}
