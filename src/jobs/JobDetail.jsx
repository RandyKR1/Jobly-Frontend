import React, {useContext, useState, useEffect} from "react";
import UserContext from "../auth/UserContext";

const Job = ({ id, title, companyName, salary, equity }) => {
    const formattedSalary = salary ? `$${salary.toLocaleString()}` : "Not specified";
    const formattedEquity = equity ? `${equity * 100}%` : "No equity";

    const { hasApplied, apply } = useContext(UserContext);
    const [applied, setApplied] = useState(false); 

    useEffect(() => {
        setApplied(hasApplied(id));
      }, [id, hasApplied]);
    
      const handleApply = async(evt) => {
        if (hasApplied(id)) return;
        
        apply(id);
        setApplied(true);
      }

    return (
            <div className="card">
                <h6 className="card-title">{title}</h6>
                <p className="jobs-comp-name">Company: {companyName}</p>
                <div className="card-body">
                    {salary && <div><small>Salary: {formattedSalary}</small></div>}
                    {equity !== undefined && <div><small>Equity: {formattedEquity}</small></div>}
                </div>
                <button className="apply-btn"
                        onClick={handleApply}
                        disabled={applied}>       
                {applied ? "Applied" : "Apply"}
                </button>
            </div>
    );
};



export default Job;
