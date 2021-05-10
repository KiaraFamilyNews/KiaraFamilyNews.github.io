import "../../components/common"

import * as React from "react"

import Seo from "../../components/seo"
import NavigationBar from "../../components/navigationBar"

export default class RoadToMillionPage extends React.Component {
    
    state = {
    };

    render() {
        return (
            <div>
                <Seo title="Home" />
                <NavigationBar siteTitle="Kiara Million" />
                <div>
                    <h1>Road to 1 Million</h1>
                </div>
            </div>
        )
    }
}
