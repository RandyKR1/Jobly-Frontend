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
            <div className="card-title-search-container">
                <div className="card-title">
                    <h1>This is the Companies page</h1>
                </div>
                <div className="search">
                    <SearchForm searchData={search} />
                </div>
            </div>
            <div className="card-list">
                <ul>
                    {companies.length > 0 ? (
                        companies.map(c => (
                            <li key={c.handle}>
                                <Company
                                    handle={c.handle}
                                    name={c.name}
                                    description={c.description}
                                    logoUrl={c.logoUrl}
                                    numEmployees={c.numEmployees}
                                />
                            </li>
                        ))
                    ) : (
                        <p>No companies found.</p>
                    )}
                </ul>
            </div>
            <Link to="/" element={<Home />}>Go Home</Link>
        </div>
    );
};

export default Companies;
