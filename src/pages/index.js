import "../components/common"
import "../styles/index.css"

import * as React from "react"

import Seo from "../components/seo"
import ChickenWaiting from '../videos/waiting-for-chikin.mp4'
import BgmSound from '../sounds/sound.mp3'
import KikkerikiOgg from '../sounds/Kikkeriki.ogg'
import KikkerikiMp3 from '../sounds/Kikkeriki.mp3'
import ChickenWaitingPoster from '../images/waiting-for-chikin.png'
import KiaraBounce from '../images/kiarabouncing.png'

let coverImageId = "cover-image";
const kikkerikiId = "kiara-kikkeriki";

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
                <Seo title="Home" />
                <div id="background">
                </div>
                <div role="button" tabIndex="0" id={coverImageId} onClick={hideCover} onKeyDown={hideCover}>
                    <video poster={ChickenWaitingPoster} autoPlay loop muted playsInline>
                        <source src={ChickenWaiting} type="video/mp4"/>
                    </video>
                    <h1>Click to continue</h1>
                    <div id={kikkerikiId}></div>
                </div>
                <div id="mobile-only"></div>
                <div id="navigation">
                    <div id="title">キアラ、100万人おめでとう！</div>
                    <div id="nav-contents">
                        <div className="nav-category">
                            <h4>KFN</h4>
                            <ul>
                                <li><a href="/articles/roadToMillion">Road to 1 million</a></li>
                                <li><a href="/articles/theFandom">About the KFP</a></li>
                            </ul>
                        </div>
                        <div className="nav-category">
                            <h4>1 million works</h4>
                            <ul>
                                <li><a href="/compilations/moments">Memorable moments</a></li>
                                <li><a href="/art/minecraft">Minecraft walkthrough</a></li>
                                <li><a href="/art/artCanvas">Community canvas</a></li>
                            </ul>
                        </div>
                        <div className="nav-category">
                            <h4>Hinotori</h4>
                            <ul>
                                <li><a href="/compilations/hinotori">Hinotori project</a></li>
                            </ul>
                        </div>
                        <div className="nav-category">
                            <h4>From the KFP</h4>
                            <ul>
                                <li><a href="/messages">From the community</a></li>
                                <li><a href="/articles/memberOrigins">Member origins</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
	
	componentDidMount() {
	  const script = document.createElement("script");
	  script.src = "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js";
	  script.async = true;
	  script.onload = () => this.scriptLoaded();

	  document.body.appendChild(script);
	}
	
	scriptLoaded(){
		if("Howl" in window){
			window.bgmSound = new window.Howl({
			  src: [BgmSound],
			  autoplay: false,
              loop: true
			});
            window.kikkeriki = new window.Howl({
                src: [KikkerikiOgg, KikkerikiMp3],
                autoplay: false,
                loop: false,
            });
            window.kikkeriki.on('end', () => {
                // Can happen in some browsers that won't allow playing bgm 
                // until after the first user intereaction
                if("bgmSound" in window && !window.bgmSound.playing()){
                    // not playing yet --> play
                    window.bgmSound.play()
                }
            })
		}
	}
}

function hideCover() {
    document.getElementById(coverImageId).classList.add('slideAnim');
    document.getElementById(kikkerikiId).classList.add('kikkerikiAnim');
	// Can happen in some browsers that won't allow playing bgm 
	// until aftercontentpage_static_page__preview_view the first user intereaction
	if("kikkeriki" in window && !window.kikkeriki.playing()){
		// not playing yet --> play
		window.kikkeriki.play()
	}
}
