import React from "react"

export default function Header() {
    let trollface = require("../images/troll-face.png")
    return (
        <header className="header">
            <img src={trollface} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">By: Maninder Lall</h4>
        </header>
    )
}