import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Header from "../../components/header2"

import "../../styles/home.css"

export default class MomentsPage extends React.Component {
    
    state = {
    };

    render() {
        return (
            <Layout>
                <SEO title="Home" />
                <Header siteTitle="Kiara Million" />
                <div>
                    <h1>Memorable Moments</h1>
                </div>
            </Layout>
        )
    }
}
