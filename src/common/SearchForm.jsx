import React, {useState} from "react";

const SearchForm = ({searchData}) => {
    const INITIAL_STATE = ''

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedData = formData.trim();
        searchData(trimmedData || undefined);
    };

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

     
    return(
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Search Company</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        value={formData}
                        onChange={handleChange} 
                        />
                        <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default SearchForm