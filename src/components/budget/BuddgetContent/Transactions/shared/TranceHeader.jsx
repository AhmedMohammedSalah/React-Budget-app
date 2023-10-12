import React from 'react'

const TranceHeader = () => {
    return (
        <div className='trans_header'>
            <h3 className="trans_header-title">
                Recent Transactions
            </h3>
            <div className="trans_header-fillters">
                <select name="Keys" className="filter-select">
                    <option value="">Sort by </option>
                </select>
                <select name="category" className="filter-select">
                    <option value=""> category</option>
                </select>
                <select name="type" className="filter-select">
                    <option value="">All </option>
                </select>
            </div>
        </div>
    )
}

export default TranceHeader
