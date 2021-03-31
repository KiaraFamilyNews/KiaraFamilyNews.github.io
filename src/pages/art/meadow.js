import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Header from "../../components/header2"

import "../../styles/home.css"

export default class MeadowPage extends React.Component {


    state = {
    };

    render() {
        return (
            <Layout>
                <SEO title="Home" />
                <Header siteTitle="Kiara Million" />
                <div>
                    <h1>Meadow of a million flowers</h1>
                </div>
            </Layout>
        )
    }
}
