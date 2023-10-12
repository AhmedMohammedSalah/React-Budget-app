import React from 'react'
import SingleTrans from './SingleTrans'
const TransContent = () => {
    return (
        <div className='trans_content'>
            <SingleTrans />
            <SingleTrans />
            <SingleTrans />
            <p className="no-dat">
                No Data           
            </p>
            <p>looding......</p>
            <p>
                error
            </p>
        </div>
    )
}

export default TransContent
