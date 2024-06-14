import React from "react";

const Jobs = ({comps}) => {
    return(
        <>
            <h1>This is the Jobs page</h1>
            <ul>
                {comps.map(c => (
                    <li><h2>{c.name}</h2>
                    <ul>
                    {c.jobs.map(j=>(
                        <li>
                            <h4>{j.title}</h4>
                            <br/>
                            <h4>{j.salary}</h4>
                            <br/>
                            <h4>{j.equity}</h4>
                        </li>
                    ))}
                    </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Jobs