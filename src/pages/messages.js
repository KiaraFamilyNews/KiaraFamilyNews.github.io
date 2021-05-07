import "../components/layout"
import "../styles/messages.css"

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from '../components/react-photo-gallery/Gallery'
import PopUp from "../components/popup"
import Message from "../components/Message"
import Header from "../components/header2"


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
                <SEO title="Messages" />
                <Header className="navbar-messages" siteTitle="Kiara Million" />
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

// export default MessagesPage

var shown = false

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

const photos = [
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 1,
        height: 1.1,
        message: "Nunc sed blandit libero volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit duis tristique sollicitudin nibh sit amet commodo."
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 1,
        height: .9,
        message: "Donec et odio pellentesque diam volutpat. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Duis at tellus at urna condimentum mattis pellentesque id. Nisl nisi scelerisque eu ultrices vitae auctor"
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 1,
        height: 1
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 1,
        height: 1.05
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 4,
        height: 3
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 1,
        height: 1
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 3,
        height: 2
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 1,
        height: 1
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 7,
        height: 2
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 1,
        height: 1
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 4,
        height: 3
    },
    {
        src: "https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",
        width: 1,
        height: 1
    }

];