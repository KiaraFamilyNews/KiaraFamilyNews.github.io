import "../components/layout"

import * as React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import LazyHero from 'react-lazy-hero';
import KiaraGangimari from '../images/kiara-gangimari.png'
import ChickenWaiting from '../videos/waiting-for-chikin.mp4'
import ChickenWaitingPoster from '../images/waiting-for-chikin.png'
import Header from "../components/header2"

import "../styles/home.scss"

let coverImageId = "cover-image";

export default class IndexPage extends React.Component {


    state = {
        shown: false
    };

    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };

    test = (event, stuff) => {
        console.log(stuff)
        this.setState({
            seen: true
        });
    }

    render() {
        return (
            <div id="index-main">
                <SEO title="Home" />
                <div id="background">
                </div>
                <div id={coverImageId} onClick={hideCover}>
                    <video poster={ChickenWaitingPoster} autoPlay loop muted playsInline>
                        <source src={ChickenWaiting} type="video/mp4"/>
                    </video>
                    <h1>Click to continue</h1>
                </div>
                <div id="mobile-only"></div>
                <div id="navigation">
                    <div id="title">キアラ、100万人おめでとう！</div>
                    <div id="nav-contents">
                        <div id="articles" className="nav-category">
                            <h4>Articles</h4>
                            <ul>
                                <li><a href="/articles/roadToMillion">Road to 1 million</a></li>
                                <li><a href="/articles/theFandom">The fandom</a></li>
                                <li><a href="/articles/memberOrigins">Member origins</a></li>
                            </ul>
                        </div>
                        <div id="art" className="nav-category">
                            <h4>Art</h4>
                            <ul>
                                <li><a href="/art/artCanvas">Community canvas</a></li>
                                <li><a href="/art/meadow">A million petals</a></li>
                                <li><a href="/art/minecraft">Minecraft</a></li>
                            </ul>
                        </div>
                        <div id="compilations" className="nav-category">
                            <h4>Compilations</h4>
                            <ul>
                                <li><a href="/compilations/hinotori">Hinotori projects</a></li>
                                <li><a href="/compilations/moments">Memorable moments</a></li>
                            </ul>
                        </div>
                        <div id="messages" className="nav-category">
                            <h4>Messages</h4>
                            <ul>
                                <li><a href="/messages">From the community</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function hideCover() {
    document.getElementById(coverImageId).classList.add('slideAnim');
}
