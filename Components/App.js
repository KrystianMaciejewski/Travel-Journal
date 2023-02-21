import React from "react"
import Card from "./Card.js"
import Data from "../data.js"
import Hero from "./Hero.js"

const items = Data.map( item => <Card {...item} /> )
export default function App(){
    return (
        <main>
            <Hero />
            <div className="list--container">
            {items}
            </div>
        </main>
    )
}