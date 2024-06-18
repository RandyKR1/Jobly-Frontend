import React from "react";
import JobDetail from "./JobDetail";
import { Link } from "react-router-dom";

const JobList = ({ jobs }) => {
    return (
        <>
                    <ul className="card-list">
                        {jobs && jobs.length > 0 ? (
                            jobs.map(j => (
                                <li key={j.id}>
                                    <JobDetail
                                        id={j.id}
                                        title={j.title}
                                        salary={j.salary}
                                        equity={j.equity}
                                        companyName={j.companyName}
                                    />
                                </li>
                            ))
                        ) : (
                            <p>No jobs found.</p>
                        )}
                    </ul>
                    <Link to="/">Go Home</Link>
                
        </>
    );
};

export default JobList;
