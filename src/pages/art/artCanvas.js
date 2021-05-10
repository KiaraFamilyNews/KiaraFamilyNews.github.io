import "../../components/common"
import "../../styles/art/artCanvas.css"

import * as React from "react"

import Seo from "../../components/seo"
import NavigationBar from "../../components/navigationBar"

import {
    isBrowser
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
                <div role="button" tabIndex="0" id="toolTip" onClick={DisableLightBox}>
                    <div className="imageDiv">
                        <img alt="fan artwork" id="image"/>
                    </div>
                </div>
                <Seo title="Home" />
                <NavigationBar siteTitle="Kiara Million" />
                <div className="art-canvas-content">
                    <h1>Art Canvas</h1>
                    {isBrowser ? <Canvas images={images} widthPadding={32} heightPadding={142} lightBox="toolTip" lightBoxImageDiv="image"/> : <Gallery photos={images} margin={5} direction={"column"}/>}
                </div>
            </div>
        )
    }
}

function DisableLightBox(e)
{
    var toolTip = document.getElementById("toolTip")
    if (e.target !== toolTip)
    {
        return;
    }
    
    toolTip.style.visibility = 'hidden'
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

        message: "Nunc sed blandit libero volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit duis tristique sollicitudin nibh sit amet commodo.",
        artist: "Yagoo 1"
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

        message: "Nunc sed blandit libero volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit duis tristique sollicitudin nibh sit amet commodo.",
        artist: "Yagoo 2"
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

        message: "Nunc sed blandit libero volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit duis tristique sollicitudin nibh sit amet commodo.",
        artist: "Yagoo 3"
    },
];
