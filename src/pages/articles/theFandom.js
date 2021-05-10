import "../../components/common"
import "../../styles/articles/theFandom.css"

import * as React from "react"

import Seo from "../../components/seo"
import NavigationBar from "../../components/navigationBar"

export default class TheFandomPage extends React.Component {


    state = {
    };

    render() {
        return (
            <div>
                <Seo title="About the KFP" />
                <div id="atk-background"></div>
                <NavigationBar siteTitle="Kiara Million" />
                <div>
                </div>
            </div>
        )
    }
}
