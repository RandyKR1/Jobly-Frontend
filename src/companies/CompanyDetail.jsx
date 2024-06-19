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
                <div className="comp-card">
                        <div className="card-title">
                            <h2>{company.name}</h2>
                        </div>
                        <div className="card-body">
                            <h4>{company.description}</h4>
                        </div>  
                        <div className="list-wrapper">
                            <JobList jobs={company.jobs}/>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default CompanyDetail