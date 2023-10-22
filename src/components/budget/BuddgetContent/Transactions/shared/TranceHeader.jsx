import React, { useContext } from 'react'
import { categoriesContext } from 'services/context/budget/categoriesContext'

const TranseHeader = () => {
    const { data: catData } = useContext( categoriesContext );
    return (
        <div className='trans_header'>
            <h3 className="trans_header-title">
                Recent Transactions
            </h3>
            <div className="trans_header-fillters">
                <select name="Keys" className="filter-select">
                    <option value="">Sort by </option>
                    <option value="">date </option>
                    <option value="">amount </option>

                </select>
                <select name="category" className="filter-select">
                    <option value=""> category</option>
                    {catData && catData.map( cat => (
                        <option key={cat.id} value={cat.id}> {cat.name}</option>
                    ))}

                </select>
                <select name="type" className="filter-select">
                    <option value="">All </option>
                    <option value="income">Income </option>
                    <option value="expanse"> Expanse </option>

                </select>
            </div>
        </div>
    )
}

export default TranseHeader
