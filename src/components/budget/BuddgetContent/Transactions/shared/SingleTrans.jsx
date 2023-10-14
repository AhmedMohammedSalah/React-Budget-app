import React, { useContext, useMemo } from 'react'
import { CurrencyDollar,PencilLine,Trash } from 'phosphor-react'
import { Button } from 'components/ui'
import { transactionsContext } from 'services/context/budget/transactionsContext'

const SingleTrans = ({transaction ,categories}) => {
    const { handleDelete } = useContext( transactionsContext )
    const currentCat = useMemo(() => {
        // eslint-disable-next-line eqeqeq
        let cat = categories.find( c => c.id == transaction.category )
        if (cat &&cat.name) {
            return cat.name
        } else {
            return ''
        }
    },[categories,transaction])
    return (
        <div className='trans_item'>
            <div className={`trans_item-icon ${transaction.type ==='expanse'?'error':''}`}>
                <CurrencyDollar/>
            </div>
            <div className="trans_item-data">
                <h4 className='trans_item-title'>{transaction.title}</h4>
                <small>{transaction.amount}$</small>,
                <small>{transaction.date}</small>,
                <small>{transaction.category}</small>,
                <small>{currentCat}</small>
            </div>
            <div className="trans_item-cta">
                <Button icon> <PencilLine/></Button>
                <Button icon type={'error'} onClick={() => {handleDelete(transaction.id)}}><Trash/></Button>
            </div>
        </div>
    )
}
export default SingleTrans
