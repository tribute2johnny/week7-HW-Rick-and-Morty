import React from 'react';
import './PageSelector.css';

const PageSelector = ({handleSelectChange, pages}) => {
    return (
        
        <div className="dropdown">
            <select onChange={handleSelectChange} className="dropdownSelector">
                {pages.map(page => {
                    return <option key={page.name} value={page.url} className="dropdownContent">{page.name}</option>
                })}

            </select>
        </div>
        
    );
};

export default PageSelector;