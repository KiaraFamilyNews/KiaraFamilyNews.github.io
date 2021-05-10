import "../../components/common"

import * as React from "react"

import Seo from "../../components/seo"
import NavigationBar from "../../components/navigationBar"

export default class TheFandomPage extends React.Component {


    state = {
    };

    render() {
        return (
            <div>
                <Seo title="Home" />
                <NavigationBar siteTitle="Kiara Million" />
                <div>
                    <h1>The Fandom</h1>
                </div>
            </div>
        )
    }
}
