import { Helmet } from "react-helmet-async"

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <section>
        <h1>Contact</h1>
        <p>you can found my social media below</p>
        <ul className="contact">
          <li>
            <a
              href="https://twitter.com/rezaageng_"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/rezaageng_"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rezaageng"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
