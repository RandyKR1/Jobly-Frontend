import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "../Home";
import JoblyApi from "../api";
import SearchForm from "../common/SearchForm";
import LoadingSpinner from "../common/LoadingSpinner";
import Company from "./Company";

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.debug("Companies useEffect");
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        setLoading(true);
        try {
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies);
        } catch (e) {
            console.error("Error while fetching companies:", e);
        } finally {
            setLoading(false);
        }
    };

    const search = async (name) => {
        console.debug('Searching for company by name:', name);
        setLoading(true);
        try {
            let allCompanies = await JoblyApi.getCompanies();
            let filteredCompanies = name
                ? allCompanies.filter(company =>
                    company.name.toLowerCase().includes(name.toLowerCase())
                )
                : allCompanies;
            setCompanies(filteredCompanies);
        } catch (e) {
            console.error('Error searching for company', e);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <div className="card-container">
            
                <div className="search">
                    <SearchForm searchData={search} />
                </div>
        
            <div className="card-list">
                <ul className="results-ul">
                    
                    {companies.length > 0 ? (
                        companies.map(c => (
                      
                            <li
                                className="card"
                                key={c.handle}>
                                <Company
                                    handle={c.handle}
                                    name={c.name}
                                    description={c.description}
                                    numEmployees={c.numEmployees}
                                />
                            </li>
                        ))
                    ) : (
                        <p>No companies found.</p>
                    )}
                   
                </ul>
            </div>
        </div>
    );
};

export default Companies;
