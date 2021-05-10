import "../../components/layout"

import * as React from "react"

import Seo from "../../components/seo"
import Header from "../../components/header2"

export default class MeadowPage extends React.Component {


    state = {
    };

    render() {
        return (
            <div>
                <Seo title="Home" />
                <Header siteTitle="Kiara Million" />
                <div>
                    <h1>Meadow of a million flowers</h1>
                </div>
            </div>
        )
    }
}
