import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import LazyHero from 'react-lazy-hero';
import KiaraGangimari from '../images/kiara-gangimari.png'
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
            <Layout>
                <SEO title="Home" />
                <Header siteTitle="Kiara Million" />
                 {/* <LazyHero imageSrc={KiaraGangimari} isFixed opacity="0.4" color="#000000" isCentered={true}>
                    <Container>
                        <h1>KIKKERIKIIIII!!!!</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue hendrerit mollis. Duis venenatis, elit sed blandit efficitur, turpis massa finibus lacus, vel sollicitudin metus odio ultrices enim. Mauris pharetra nibh nibh, et mollis magna cursus interdum. Curabitur mauris velit, lobortis non sem et, tristique varius nisi. Curabitur dapibus non arcu ac faucibus. Aliquam quis porttitor neque. Nam ac est tristique, eleifend felis sed, ultricies neque. Cras justo tortor, eleifend non diam vel, ultricies fringilla risus. Nullam ullamcorper accumsan nulla. Donec quis vehicula leo, ac rhoncus nunc.
                        </p>
                    </Container>
                </LazyHero>  */}
                <div className="top-hero" >
                        <Container>
                            <h1>KIKKERIKIIIII!!!!</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue hendrerit mollis. Duis venenatis, elit sed blandit efficitur, turpis massa finibus lacus, vel sollicitudin metus odio ultrices enim. Mauris pharetra nibh nibh, et mollis magna cursus interdum. Curabitur mauris velit, lobortis non sem et, tristique varius nisi. Curabitur dapibus non arcu ac faucibus. Aliquam quis porttitor neque. Nam ac est tristique, eleifend felis sed, ultricies neque. Cras justo tortor, eleifend non diam vel, ultricies fringilla risus. Nullam ullamcorper accumsan nulla. Donec quis vehicula leo, ac rhoncus nunc.
                            </p>
                        </Container>
                </div>
                <div className="home-hero-1">
                    <Container>
                        <h1>KIKKERIKIIIII!!!!</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue hendrerit mollis. Duis venenatis, elit sed blandit efficitur, turpis massa finibus lacus, vel sollicitudin metus odio ultrices enim. Mauris pharetra nibh nibh, et mollis magna cursus interdum. Curabitur mauris velit, lobortis non sem et, tristique varius nisi. Curabitur dapibus non arcu ac faucibus. Aliquam quis porttitor neque. Nam ac est tristique, eleifend felis sed, ultricies neque. Cras justo tortor, eleifend non diam vel, ultricies fringilla risus. Nullam ullamcorper accumsan nulla. Donec quis vehicula leo, ac rhoncus nunc.
                        </p>
                    </Container>
                </div>
                <div className="home-hero-2">
                    <Container>
                        <h1>KIKKERIKIIIII!!!!</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue hendrerit mollis. Duis venenatis, elit sed blandit efficitur, turpis massa finibus lacus, vel sollicitudin metus odio ultrices enim. Mauris pharetra nibh nibh, et mollis magna cursus interdum. Curabitur mauris velit, lobortis non sem et, tristique varius nisi. Curabitur dapibus non arcu ac faucibus. Aliquam quis porttitor neque. Nam ac est tristique, eleifend felis sed, ultricies neque. Cras justo tortor, eleifend non diam vel, ultricies fringilla risus. Nullam ullamcorper accumsan nulla. Donec quis vehicula leo, ac rhoncus nunc.
                        </p>
                    </Container>
                </div>
                <div className="home-hero-1">
                    <Container>
                        <h1>KIKKERIKIIIII!!!!</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue hendrerit mollis. Duis venenatis, elit sed blandit efficitur, turpis massa finibus lacus, vel sollicitudin metus odio ultrices enim. Mauris pharetra nibh nibh, et mollis magna cursus interdum. Curabitur mauris velit, lobortis non sem et, tristique varius nisi. Curabitur dapibus non arcu ac faucibus. Aliquam quis porttitor neque. Nam ac est tristique, eleifend felis sed, ultricies neque. Cras justo tortor, eleifend non diam vel, ultricies fringilla risus. Nullam ullamcorper accumsan nulla. Donec quis vehicula leo, ac rhoncus nunc.
                        </p>
                    </Container>
                </div>
            </Layout>
        )
    }
}
