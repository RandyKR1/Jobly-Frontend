import React, { useState } from "react";
import SearchForm from "../common/SearchForm"

const TitleWrapper = () => {
    

    return (
        <div className="card-title-search-container">
                    <div className="card-title">
                        <h1>This is the Companies page</h1>
                    </div>
                    <div className="search">
                        <SearchForm searchData={search} />
                    </div>
        </div>
    );
};

export default TitleWrapper