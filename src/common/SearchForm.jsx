import React, { useState } from "react";

const SearchForm = ({ searchData }) => {
    const [formData, setFormData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        searchData(formData.trim());
    };

    const resetList = (e) => {
        e.preventDefault();
        setFormData("");
        searchData("");
    };

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"/>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={formData}
                    onChange={handleChange} 
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={resetList}>Reset</button>
            </form>
        </div>
    );
};

export default SearchForm;
