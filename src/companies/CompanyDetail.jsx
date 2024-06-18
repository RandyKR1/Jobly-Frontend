import React, {useEffect, useState} from "react";
import Home from "../Home";
import {Link, useParams} from "react-router-dom"
import JoblyApi from "../api";
import LoadingSpinner from "../common/LoadingSpinner";
import JobList from "../jobs/JobList";

const CompanyDetail = () => {
    const {handle} = useParams()

    const [company, setCompany] = useState(null)

    useEffect(() => {
        const getCompany = async() => {
            let company = await JoblyApi.getCompany(handle);
            setCompany(company)
        }
        getCompany()
    }, [handle])

    if (!company) return <LoadingSpinner />

    return (
        <>
            <div className="card-container">
                <div className="card">
                    <h1>This is the Company Detail page</h1>
                        <br />
                    <h2>{company.name}</h2>
                        <br />
                    <p>{company.description}</p>
                    <div className="card-list">
                        <JobList jobs={company.jobs}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyDetail