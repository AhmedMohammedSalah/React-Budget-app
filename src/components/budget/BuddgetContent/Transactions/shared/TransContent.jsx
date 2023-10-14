import React ,{ useContext } from 'react'
import SingleTrans from './SingleTrans'
import { transactionsContext} from 'services/context/budget/transactionsContext'
import { categoriesContext} from 'services/context/budget/categoriesContext'

const TransContent = () => {
    // axiosApi.get( '/transactions' ).then( res => {
    //     console.log(res)
    // })
    const { data:transactions ,loading ,error } = useContext( transactionsContext )
    const { data: categories ,loading:catLoading  } = useContext(categoriesContext )
    return (
        <div className='trans_content'>
            {!loading && transactions &&!catLoading && transactions.length&&categories.length && !error ? (
            <>
                {transactions.map( ( transaction ) => (
                        <SingleTrans transaction={ transaction} key={transaction.id} categories= {categories}/>
                    ))}
                
            
            </>):(<></>)}
            {loading || catLoading&&(
                <p className='loading'>looding......</p>
            )}
            {error && !loading &&(                
                <p className='data-error'>
                    {error}
                </p>
            )}
            {!loading && transactions && !transactions.length && !error ? (
                <p className="no-data">
                    No Data                       
                </p>
            ) : ( <></> )}
        </div>
    )
}

export default TransContent
