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
                <video id="background-video" poster={ChickenWaitingPoster} autoPlay muted loop>
                    <source src={ChickenWaiting} type="video/mp4"/>
                </video>
                <div id="navigation">
                    <div id="title">キアラ、100万人おめでとう！</div>
                    <div id="nav-contents">
                        <div id="articles" className="nav-category">
                            <h4>Articles</h4>
                            <ul>
                                <li>Road to 1 million</li>
                                <li>The fandom</li>
                                <li>Member origins</li>
                            </ul>
                        </div>
                        <div id="art" className="nav-category">
                            <h4>Art</h4>
                            <ul>
                                <li>Road to 1 million</li>
                                <li>The fandom</li>
                                <li>Member origins</li>
                            </ul>
                        </div>
                        <div id="compilations" className="nav-category">
                            <h4>Compilations</h4>
                            <ul>
                                <li>Road to 1 million</li>
                                <li>The fandom</li>
                                <li>Member origins</li>
                            </ul>
                        </div>
                        <div id="messages" className="nav-category">
                            <h4>Messages</h4>
                            <ul>
                                <li>Road to 1 million</li>
                                <li>The fandom</li>
                                <li>Member origins</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
