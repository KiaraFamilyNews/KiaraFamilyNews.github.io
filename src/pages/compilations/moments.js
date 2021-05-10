import "../../components/common"

import * as React from "react"

import Seo from "../../components/seo"
import NavigationBar from "../../components/navigationBar"

export default class MomentsPage extends React.Component {
    
    state = {
    };

    render() {
        return (
            <div>
                <Seo title="Home" />
                <NavigationBar siteTitle="Kiara Million" />
                <div>
                    <h1>Memorable Moments</h1>
                </div>
            </div>
        )
    }
}
