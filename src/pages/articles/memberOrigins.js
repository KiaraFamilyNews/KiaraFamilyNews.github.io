import "../../components/layout"

import * as React from "react"
import { Link } from "gatsby"

import SEO from "../../components/seo"
import Header from "../../components/header2"

export default class TheFandomPage extends React.Component {


    state = {
    };

    render() {
        return (
            <div>
                <SEO title="Home" />
                <Header siteTitle="Kiara Million" />
                <div>
                    <h1>Member Origins</h1>
                </div>
            </div>
        )
    }
}
