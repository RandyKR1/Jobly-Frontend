import React from "react";


const Job = ({ title, companyName, salary, equity }) => {
    const formattedSalary = salary ? `$${salary.toLocaleString()}` : "Not specified";
    const formattedEquity = equity ? `${equity * 100}%` : "No equity";

    return (
            <div className="card">
                <h6 className="card-title">{title}</h6>
                <p className="jobs-comp-name">Company: {companyName}</p>
                <div className="card-body">
                    {salary && <div><small>Salary: {formattedSalary}</small></div>}
                    {equity !== undefined && <div><small>Equity: {formattedEquity}</small></div>}
                </div>
            </div>
    );
};



export default Job;
