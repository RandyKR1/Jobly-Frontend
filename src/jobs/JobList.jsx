import React from "react";
import JobDetail from "./JobDetail";
import { Link } from "react-router-dom";

const JobList = ({ jobs }) => {
    return (
        <>
                <div className="card-list">
                    <ul className="results-ul">
                        {jobs && jobs.length > 0 ? (
                            jobs.map(j => (
                                <li key={j.id}
                                    className="card">
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
                </div>
        </>
    );
};

export default JobList;
