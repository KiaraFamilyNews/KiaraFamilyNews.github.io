import React from "react"
import "../styles/credits.css"

const Credits = React.memo(function Credits({
    className,
    creditArray
}) {

    console.log(creditArray)
    return (
        <React.Fragment>
            <div id="credit-container" className={className}>
                <h1>Credits</h1>
                {creditArray.map((credit) => {
                    return <div className="credit">
                        <h6>{credit.name}</h6>
                        <ul>
                            {credit.roles.map((role) =>{return <li>{role}</li>})}
                            <li><a href={"https://twitter.com/" + credit.twitterHandle}>@{credit.twitterHandle}</a></li>
                        </ul>
                    </div>
                })}
            </div>
        </React.Fragment>
    )

});
export default Credits;
