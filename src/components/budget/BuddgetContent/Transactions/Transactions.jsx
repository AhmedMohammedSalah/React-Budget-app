import React from 'react'
import './Transactions.css'
import TranseHeader from './shared/TranceHeader'
import TransContent from './shared/TransContent'
const Transactions = () => {
    return (
        <div className='trans'>
            <TranseHeader></TranseHeader>
            <TransContent></TransContent>
        </div>
    )
}

export default Transactions
