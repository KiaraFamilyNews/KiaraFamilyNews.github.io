import "../../components/common"
import "../../styles/compilations/hinotori.css"

import * as React from "react"

import Seo from "../../components/seo"
import NavigationBar from "../../components/navigationBar"
import Credits from "../../components/credits"

export default class HinotoriPage extends React.Component {
    
    state = {
    };

    componentDidMount() {
        if (typeof document !== `undefined`) {
            var hinotoriRef =  document.getElementById("hinotori-video");
            hinotoriRef.style.height = (hinotoriRef.clientWidth * 9 / 16) + "px";

            window.onresize = function(){
                var hinotoriRef =  document.getElementById("hinotori-video");
                hinotoriRef.style.height = (hinotoriRef.clientWidth * 9 / 16) + "px";
              };
          }
    }

    render() {
        return (
            <div>
                <Seo title="Hinotori Project" />
                <div id="hntp-background"></div>
                <NavigationBar siteTitle="Kiara Million" />
                <div id="hinotori-content">
                    <div className="article">
                        <h1>Hinotori Project!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <iframe className="music-video" id="hinotori-video" width="100%" src="https://www.youtube.com/embed/eDfMDkgheQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <Credits className="article" creditArray={credits}/>
                </div>
            </div>
        )
    }
}

var credits = [
    {
        name: "Yagoo",
        roles: [
            "Video Editor",
            "Best Girl",
            "Just a Chad"
        ],
        twitterHandle: "tanigox"
    },
    {
        name: "Yagoo",
        roles: [
            "Video Editor",
            "Best Girl"
        ],
        twitterHandle: "tanigox"
    },
    {
        name: "Yagoo",
        roles: [
            "Video Editor",
            "Best Girl"
        ],
        twitterHandle: "tanigox"
    },
    {
        name: "Yagoo",
        roles: [
            "Video Editor",
            "Best Girl"
        ],
        twitterHandle: "tanigox"
    },
    {
        name: "Yagoo",
        roles: [
            "Video Editor",
            "Best Girl"
        ],
        twitterHandle: "tanigox"
    },
    {
        name: "Yagoo",
        roles: [
            "Video Editor",
            "Best Girl"
        ],
        twitterHandle: "tanigox"
    },
    {
        name: "Yagoo",
        roles: [
            "Video Editor",
            "Best Girl"
        ],
        twitterHandle: "tanigox"
    },
    {
        name: "Yagoo",
        roles: [
            "Video Editor",
            "Best Girl"
        ],
        twitterHandle: "tanigox"
    },
    {
        name: "Yagoo",
        roles: [
            "Video Editor",
            "Best Girl"
        ],
        twitterHandle: "tanigox"
    }
]