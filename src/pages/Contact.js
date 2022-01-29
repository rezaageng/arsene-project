import { Helmet } from "react-helmet-async"

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <section>
        <h1>Contact</h1>
        <p>you can found my contact bellow</p>
        <ul>
          <li>Email: rezaageng5@gmail.com</li>
          <li>
            <a href="https://twitter.com/rezaageng_">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com/rezaageng_">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/rezaageng">Github</a>
          </li>
        </ul>
      </section>
    </>
  )
}
