import React from "react";


const Job = ({ title, companyName, salary, equity }) => {
    const formattedSalary = salary ? `$${salary.toLocaleString()}` : "Not specified";
    const formattedEquity = equity ? `${equity * 100}%` : "No equity";

    return (
        <div className="JobCard card">
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p>{companyName}</p>
                {salary && <div><small>Salary: {formattedSalary}</small></div>}
                {equity !== undefined && <div><small>Equity: {formattedEquity}</small></div>}
            </div>
        </div>
    );
};



export default Job;
