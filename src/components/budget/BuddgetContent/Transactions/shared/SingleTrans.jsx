import React from 'react'
import { CurrencyDollar,PencilLine,Trash } from 'phosphor-react'
import { Button } from 'components/ui'
const SingleTrans = () => {
    return (
        <div className='trans_item'>
            <div className="trans_item-icon">
                <CurrencyDollar/>
            </div>
            <div className="trans_item-data">
                <h4 className='trans_item-title'> Title</h4>
                <small>500$</small>,
                <small>date</small>,
                <small>category</small>
            </div>
            <div className="trans_item-cta">
                <Button icon> <PencilLine/></Button>
                <Button icon type={'error'}><Trash/></Button>
            </div>
        </div>
    )
}
export default SingleTrans
