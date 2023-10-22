import React, { useContext, useState } from 'react'
import { categoriesContext } from 'services/context/budget/categoriesContext'
import { transactionsContext } from 'services/context/budget/transactionsContext'

const TranseHeader = () => {
    const {handelFilters}=useContext(transactionsContext)
    const [inputs, setInputs] = useState( {
        keys: '',
        category: '',
        type: ''
    })
    const handelFilterData = ( e ) => {
        const name=e.target.name
        const value=e.target.value
        const fdata={...inputs,[name]: value}
        setInputs(fdata)
        handelFilters(fdata)
    }
    // console.log(inputs)
    const { data: catData } = useContext( categoriesContext );
    return (
        <div className='trans_header'>
            <h3 className="trans_header-title">
                Recent Transactions
            </h3>
            <div className="trans_header-fillters">
                <select name="keys" className="filter-select"onClick={handelFilterData}>
                    <option value="">Sort by </option>
                    <option value="date">date </option>
                    <option value="amount">amount </option>

                </select>
                <select name="category" className="filter-select"onClick={handelFilterData}>
                    <option value=""> category</option>
                    {catData && catData.map( cat => (
                        <option key={cat.id} value={cat.id}> {cat.name}</option>
                    ))}

                </select>
                <select name="type" className="filter-select"onClick={handelFilterData}>
                    <option value="">All </option>
                    <option value="income">Income </option>
                    <option value="expanse"> Expanse </option>

                </select>
            </div>
        </div>
    )
}

export default TranseHeader
