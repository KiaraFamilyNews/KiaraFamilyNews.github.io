import "../../components/layout"
import "../../styles/art/artCanvas.css"

import * as React from "react"

import SEO from "../../components/seo"
import Header from "../../components/header2"

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import Canvas from "../../components/canvas/canvas"
import Gallery from '../../components/react-photo-gallery/Gallery'

import image1src from "../../images/dontstarve.jpeg"
import image2src from "../../images/milfkiara.jpeg"
import image3src from "../../images/smolltakamori.jpeg"


export default class TheFandomPage extends React.Component {

    state = {
    };

    render() {
        
        return (
            <div>
                <SEO title="Home" />
                <Header siteTitle="Kiara Million" />
                <div className="art-canvas-content">
                    <h1>Art Canvas</h1>
                    {isBrowser ? <Canvas images={images} widthPadding={32} heightPadding={142}/> : <Gallery photos={images} margin={5} direction={"column"}/>}
                </div>
            </div>
        )
    }
}

const images = [
    {
        src: image1src,
        
        // - For gallery
        width: 1,
        height: 0.4464,

        // - For canvas
        left: 0,
        top: 0,
        angle: 0,
        opacity: 1,
        scaleX: 0.3,
        scaleY: 0.3,
    },
    {
        src: image2src,
        width: 1,
        height: 1.2449,
        left: 1490,
        top: 0,
        angle: 0,
        opacity: 1,
        scaleX: 0.3,
        scaleY: 0.3,
    },
    {
        src: image3src,
        width: 1,
        height: 1.7042,
        left: 500,
        top: 600,
        angle: 0,
        opacity: 1,
        scaleX: 0.2,
        scaleY: 0.2,
    },
];
