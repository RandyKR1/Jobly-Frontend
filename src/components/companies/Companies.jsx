import React from "react";
import Home from "../Home";
import {Link} from "react-router-dom"

const Companies = ({comps}) => {
    return (
        <>
            <h1>This is the Companies page</h1>
            <ul>
                {comps.map(c => (
                    <li>{c.name}</li>
                ))}
            </ul>
            <Link to="/" element={<Home/>}>Go Home</Link>
        </>
    )
}

export default Companies