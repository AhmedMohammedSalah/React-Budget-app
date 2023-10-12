import React from 'react'
import './Transactions.css'
import TranceHeader from './shared/TranceHeader'
import TransContent from './shared/TransContent'
const Transactions = () => {
    return (
        <div className='trans'>
            <TranceHeader></TranceHeader>
            <TransContent></TransContent>
        </div>
    )
}

export default Transactions
