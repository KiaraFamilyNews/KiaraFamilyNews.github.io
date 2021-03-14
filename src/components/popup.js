import * as React from "react"
import "../styles/popup.css"

const Popup = ({ children }) => {
    console.log("pop up!")
    return (
        <div class="modal">
            <div class="modal_content">
                <span class="close">&times;</span>
                <p>I'm A Pop Up!!!</p>
            </div>
        </div>
    )
}

export default Popup