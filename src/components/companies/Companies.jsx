import React, {useState, useEffect} from "react";
import Home from "../Home";
import {Link} from "react-router-dom"
import JoblyApi from "../../api";
import SearchForm from "../forms/SearchForm";
import LoadingSpinner from "../../LoadingSpinner";


const Companies = () => {
    const [companies, setCompanies] = useState(null)
    const [loading, setLoading] = useState(true)
 
    /** useEffect THAT HANDLES INITIAL FETCHING OF ALL COMPANIES WHEN COMPONENT RENDERS */
    useEffect(() => {
        console.debug("Companies useEffect")
        
        const fetchCompanies = async () => {
            try{
            let companies = await JoblyApi.getCompanies();
            console.log('Fetched Companies:', companies)
            setCompanies(companies)
            } catch(e){
                console.error("Error while fetching companies:", e)
            } finally{
                setLoading(false);
            }
        }
        fetchCompanies()
    }, [])

    /** SEARCH FUNCTION THAT RETURNS COMPANIES BASED ON THE TEXT CONTENT IN THE SEARCH BAR. MODIFIED SO RESULT DOESN"T HAVE TO BE EXACT */
    const search = async (name) => {
        console.debug('Searching for company by name:', name);
        setLoading(true)
        try{
            let allCompanies = await JoblyApi.getCompanies();
            let filteredCompanies = allCompanies.filter(company =>
                company.name.toLowerCase().includes(name.toLowerCase())
            );
            setCompanies(filteredCompanies)
        }catch(e){
            console.error('Error searching for company', e);
        }finally{
            setLoading(false);
        }
        console.log(companies)
    }
    

    if (loading) return <LoadingSpinner />

    return (
        <>
            <h1>This is the Companies page</h1>
            <SearchForm searchData={search} />
            <ul>
                {companies && companies.length > 0 ? (
                    companies.map(c => (
                        <li key={c.handle}>Name: {c.name}</li>
                    ))
                ) : (
                    <p>No companies found.</p>
                )}
            </ul>
            <Link to="/" element={<Home />}>Go Home</Link>
        </>
    );
}

export default Companies