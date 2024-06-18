import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import LoadingSpinner from "../common/LoadingSpinner";
import SearchForm from "../common/SearchForm";
import JobList from "./JobList";

const Jobs = () => {
    const [jobs, setJobs] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async() => {
            try{
                let jobs = await JoblyApi.getJobs();
                console.log("Fetched jobs:", jobs);
                setJobs(jobs);
                console.log(jobs)
            }catch(e){
                console.error("unable to fetch jobs:", e)
            }finally{
                setLoading(false)
            }
        }
         fetchJobs();  
    }, [])

    /** SEARCH FUNCTION THAT RETURNS JOBS BASED ON THE TEXT CONTENT IN THE SEARCH BAR. MODIFIED SO RESULT DOESN"T HAVE TO BE EXACT */
    const search = async (title) => {
        setLoading(true)
        try{
            let allJobs = await JoblyApi.getJobs();
            let filteredJobs = allJobs.filter(job =>
                job.title.toLowerCase().includes(title.toLowerCase())
            );
            setJobs(filteredJobs)
        }catch(e){
            console.error('Error searching for company', e);
        }finally{
            setLoading(false);
        }
        console.log(jobs)
    }

    if (loading) return <LoadingSpinner />

    return (
        <div className="card-container">
            <div className="card-title-search-container">
                    <div className="card-title">
                        <h1>Jobs</h1>
                    </div>
                    <div className="search">
                        <SearchForm searchData={search} />
                    </div>
                </div>
                        {jobs.length
                            ? <JobList jobs={jobs} />
                            : <p className="card">Sorry, no results were found!</p>
                        }
                </div>
    );
}

export default Jobs