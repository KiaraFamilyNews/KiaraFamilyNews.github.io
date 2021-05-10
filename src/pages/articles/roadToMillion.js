import "../../components/common"
import "../../styles/articles/roadToMillion.css"

import * as React from "react"

import Seo from "../../components/seo"
import NavigationBar from "../../components/navigationBar"

export default class RoadToMillionPage extends React.Component {
    
    state = {
    };

    render() {
        return (
            <div>
                <Seo title="Road to 1 million" />
                <div id="rtm-background"></div>
                <NavigationBar siteTitle="Kiara Million" />
                <div>
                </div>
            </div>
        )
    }
}
