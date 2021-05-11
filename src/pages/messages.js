import "../components/common"
import "../styles/messages.css"

import * as React from "react"

//import Layout from "../components/common"
import Seo from "../components/seo"
import Gallery from '../components/react-photo-gallery/Gallery'
import PopUp from "../components/popup"
import Message from "../components/Message"
import NavigationBar from "../components/navigationBar"


export default class MessagesPage extends React.Component {
    

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

    componentDidMount(){
        document.body.style.backgroundColor = "#2a9d8f"
    }
    
    componentWillUnmount(){
        document.body.style.backgroundColor = null;
    }

    render() {
        
        return (
            <div>
                <Seo title="Messages" />
                <div id="background"></div>
                <NavigationBar className="navbar-messages" siteTitle="Kiara Million" />
                <div className="message-container">
                    <h1 Id="page-title">Messages</h1>
                    <Gallery photos={messages} margin={15} direction={"column"} onClick={this.test} renderImage={Message} />
                    {/* <Gallery photos={photos} margin={5} direction={"column"} onClick={this.test} /> */}
                    {this.state.shown ? <PopUp toggle={this.togglePop} /> : null}
                </div>
            </div>
        )
    }
}


const messages = [
    {
        width: 1,
        height: 0.9,
        message: "I was struggling a lot around the debut of EN. Watching you persist and push on inspired me Kiara. You made me smile, laugh, and keep going. You are a star that has kept guiding me to be the best I could be. I can never thank you enough.",
        author: "Tython, KFP Legal Eagle"
    },
    {
        width: 1,
        height: .92,
        message: "Kiara, Congratulations on the 1 million subs!!! We're all here because we like and love you. In one way or another, you have affected 1 MILLION CHICKENS, and we're here to stay. There are not enough words to praise our blazing phoenix!",
        author: "Swan_Flyer"
    },
    {
        width: 1,
        height: 0.85,
        message: "I love your energy and your genki attitude, and all of your content you make!(even the bottom left ones!) I'm happy that your hard work paid off.  Even tho I'm harsh on twitter, I'm happy that I can be your fan!",
        author: "NaGeL"
    },
    {
        width: 1,
        height: 0.9,
        message: "Congratulations! I got into hololive because of you, my english is bad so I started studying more after your minecraft streams. I even draw comics on reddit (I'm the dude of \"More adventures with Kiara\")",
        author: "Leo3oooX - KFP Ninja"
    },
    {
        width: 1,
        height: 0.8,
        message: "Congratulations Tenchou on the 1 million! Thank you for being the lovable, adorkable, funny chic- phoenix* that you are, and I look forward to the continued expedition into the bottom left!",
        author: "Arty | KFP Takamori Advocate"
    },
    {
        width: 1,
        height: 0.95,
        message: "Glückwünsche zu 1M subs Tenchou! Dein Debüt kam wie ein Hoffnungsschimmer während einer schweren Zeit und du hast es immer geschafft mir den Tag zu verschönern. Du wurdest mein Idol und Heldin und dafür danke ich dir so sehr",
        author: "RandomTime | KFP German Language Specialist"
    },
    {
        width: 1,
        height: 0.9,
        message: "Congrats on 1M subs, boss! Thank you so much for everything, for all the funny streams and for always being so genuine and positive, I truly admire you a lot. Looking forward to celebrate more milestones in the future.",
        author: "Yuki Baskerville | KFP Pâtissière"
    },
    {
        width: 1,
        height: 0.9,
        message: "Hello, I am Clan I've watched some of your steams. A close friend introduced me to KFP, a lot of people there are my best friends now. You are amazing at what you do. Thank you for being you. Here's to 1 million subs!",
        author: "Clan, KFP Member"
    },
    {
        width: 1,
        height: 0.7,
        message: "Hi 店長! Congrats!\nYour stories and skills have motivated me to relearn Chinese and interact more. 感謝 for helping me how 鳥ch out to people!",
        author: "火鳥, KFP Tax Auditor"
    },
    {
        width: 1,
        height: 0.9,
        message: "Congrats on your 1M subs, boss! Thank you very much for all the up and down moments that you’ve chosen to share with us. Just remember that we’ll always be here for you through thick and thin. Love lots from your KFP family!",
        author: "Kenji健次 | KFP Hühnerfütterung"
    },
    {
        width: 1,
        height: 0.9,
        message: "Conragtz Tenchou! 1 Mil is such a huge milestone and hopefully you got more milestones in the future as well as other important things! I'll be always watching your streams even though I'm in SEA gang.",
        author: "Schrodinger | KFP Lamp"
    },
    {
        width: 1,
        height: 0.9,
        message: "Congratulations on reach 1M Tenchou!!! You are amazing and your streams always brighten up my day. Thank you so much. I may not be here since day one but I’ll always be right here supporting you until the end of time.",
        author: "Unknown"
    },
    {
        width: 1,
        height: 0.9,
        message: "Hi tenchou! Congrats on reaching 1 mil! I started watching around 500k, but still, after watching you almost everyday for ~5 months, i dont think i could ever stop ww\nSo cheers! I'll continue supporting ya for a long while :D",
        author: "Leficios"
    },
    {
        width: 1,
        height: 1,
        message: "Tenchou おめでとうございます！That's the extent of my Japanese, forgive me Tenchou. It brings a tear to my eye seeing you reach 1 million, you deserve it  honestly! Seeing how hardworking and entertaining you are, keep up the good work!",
        author: "Odzi"
    },
    {
        width: 1,
        height: 0.9,
        message: "店長おめでとう！百万登録者になった！\nWe knew this day would come, and here we are witnessing you in all your glory!\nWe shall raise a glass to the million, and here's a toast to another million more!",
        author: "Pudding"
    },
    {
        width: 1,
        height: 1,
        message: "店長、百万羽おめでとうございます！ You've changed so much and come so far. Words can't express why I enjoy watching you and I don't regret the time spent with you and KFP! I wish you buckets of success and happiness in the future! Seeyanara~",
        author: "Yagaru"
    },
    {
        width: 1,
        height: 0.85,
        message: "It's amazing how far you've come and we've all grown so close over time. Thank you for everything you do and I can't wait to see what you do in the future! Love ya Tenchou!",
        author: "King Mufasa"
    },
    {
        width: 1,
        height: 0.9,
        message: "Congratulations to a million subs! It's been a long journey and I'm glad that you always stood up and persevered, like the amazing phoenix you are! Please stay true to yourself and let's enjoy this venture together with KFP!",
        author: "Dominik K"
    },
    {
        width: 1,
        height: 0.9,
        message: "Kiara, it's been a long, long ride to 1 million. Through the highs, the lows and in between, I have seen you grow. After everything you've done for us it's impossible for anyone to say you don't deserve this. Congrats!",
        author: "Soraskeyblade"
    },
    {
        width: 1,
        height: 0.85,
        message: "Congrats on 1mil Kiara! I'm so proud of you, you truly are an inspiration to work hard! Let's toast a glass of gravy to the future milestones and all the fun we'll have! Love you tenchou!",
        author: "Magic"
    }

];