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
                <NavigationBar className="navbar-messages" siteTitle="Kiara Million" />
                <div className="message-container">
                    <h1>Messages</h1>
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
        height: 1.1,
        message: "Nunc sed blandit libero volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit duis tristique sollicitudin nibh sit amet commodo.",
        author: "Yagoo"
    },
    {
        width: 1,
        height: .9,
        message: "Donec et odio pellentesque diam volutpat. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Duis at tellus at urna condimentum mattis pellentesque id.",
        author: "A Name"
    },
    {
        width: 1,
        height: 1,
        message: "auaaavs r sg auausrku o w cTulnfrtybrrdo’m o u  rnoe  eh  h  ehte hywnn oyhhtuMlsmoK sor  ys Pte o  loayhmotsttmyo  vlivagnb coehmutfryn1Lo hwmritCesFn!rflte reehpr t . hi ba nflu ei nyasshdu oo ! ol.atsostJme tewed’o,uk hbc",
        author: "Yagoo"
    },
    {
        width: 1,
        height: 1.1,
        message: "Nunc sed blandit libero volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit duis tristique sollicitudin nibh sit amet commodo.",
        author: "Yagoo"
    },
    {
        width: 1,
        height: .9,
        message: "Donec et odio pellentesque diam volutpat. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Duis at tellus at urna condimentum mattis pellentesque id.",
        author: "Yagoo"
    },
    {
        width: 1,
        height: 1,
        message: "auaaavs r sg auausrku o w cTulnfrtybrrdo’m o u  rnoe  eh  h  ehte hywnn oyhhtuMlsmoK sor  ys Pte o  loayhmotsttmyo  vlivagnb coehmutfryn1Lo hwmritCesFn!rflte reehpr t . hi ba nflu ei nyasshdu oo ! ol.atsostJme tewed’o,uk hbc",
        author: "Yagoo"
    },
    {
        width: 1,
        height: 1.1,
        message: "Nunc sed blandit libero volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit duis tristique sollicitudin nibh sit amet commodo.",
        author: "Yagoo"
    },
    {
        width: 1,
        height: .9,
        message: "Donec et odio pellentesque diam volutpat. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Duis at tellus at urna condimentum mattis pellentesque id.",
        author: "Yagoo"
    },
    {
        width: 1,
        height: 1,
        message: "auaaavs r sg auausrku o w cTulnfrtybrrdo’m o u  rnoe  eh  h  ehte hywnn oyhhtuMlsmoK sor  ys Pte o  loayhmotsttmyo  vlivagnb coehmutfryn1Lo hwmritCesFn!rflte reehpr t . hi ba nflu ei nyasshdu oo ! ol.atsostJme tewed’o,uk hbc",
        author: "Yagoo"
    },
    {
        width: 1,
        height: 1.1,
        message: "Nunc sed blandit libero volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit duis tristique sollicitudin nibh sit amet commodo.",
        author: "Yagoo"
    },
    {
        width: 1,
        height: .9,
        message: "Donec et odio pellentesque diam volutpat. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Duis at tellus at urna condimentum mattis pellentesque id.",
        author: "Yagoo"
    },
    {
        width: 1,
        height: 1,
        message: "auaaavs r sg auausrku o w cTulnfrtybrrdo’m o u  rnoe  eh  h  ehte hywnn oyhhtuMlsmoK sor  ys Pte o  loayhmotsttmyo  vlivagnb coehmutfryn1Lo hwmritCesFn!rflte reehpr t . hi ba nflu ei nyasshdu oo ! ol.atsostJme tewed’o,uk hbc",
        author: "Yagoo"
    },

];