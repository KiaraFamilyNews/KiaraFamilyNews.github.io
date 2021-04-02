import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header2"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <Header siteTitle="Kiara Million" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
