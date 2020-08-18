import React from 'react';

const SearchHeader = () => {
    return (
        <form className="search-field d-md-flex d_none_sm" action="#">
            <div className="form-group mb-0">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="feather ft-search"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="جستجو در اینجا ..."/>
                </div>
            </div>
        </form>
    );
};

export default SearchHeader;