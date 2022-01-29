import { Helmet } from "react-helmet-async"

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <section>
        <h1>Profile</h1>
        <p>on this page i'll show my profile</p>
      </section>
    </>
  )
}
