import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Header from "../../components/header2"

// import "../../components/canvas/vendor/modernizr-3.11.2.min"
// import "../../components/canvas/plugins"
import Canvas from "../../components/canvas/canvas"


export default class TheFandomPage extends React.Component {
    state = {
    };

    render() {
        return (
            <div>
                <SEO title="Home" />
                <Header siteTitle="Kiara Million" />
                <div>
                    <h1>Art Canvas</h1>
                    <Canvas/>
                </div>
            </div>
        )
    }
}
