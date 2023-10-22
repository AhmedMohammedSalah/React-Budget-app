import React, { createContext, useReducer, useEffect ,useState} from "react";
import { useMemo } from "react";
import { useCallback ,useRef} from "react";
import { getTransactions,deleteTransactions } from "services/apis/transactions.api";

export const transactionsContext = createContext();

const initialState = {
    data: [],
    loading: true,
    error: null,
};

const ContextReducer = ( state, action ) => {
    switch ( action.type ) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}


export const TransactionsProvider = ( { children } ) => {
    const [state, dispatch] = useReducer( ContextReducer, initialState );
    const [filters, setFilters] = useState( {
        keys: null,
        category: null,
        type: null
    } );
    const filteredData = useMemo( () => {
        let data = [ ...state.data ]
        if ( !data || !data.length ) {
            return []
        }
        // eslint-disable-next-line eqeqeq
        if ( filters.keys && filters.keys == "date" ) {
            data = data.sort( ( a, b ) => {
                const aDate=new Date(a.date).getTime()
                const bDate = new Date( b.date ).getTime()
                return bDate - aDate
            })
        }
        // eslint-disable-next-line eqeqeq
        if ( filters.keys && filters.keys == "amount" ) {
            data = data.sort( ( a, b ) => {
                return +b.amount - +a.amount
            })
        }
        if ( filters.category  ) {
            // eslint-disable-next-line eqeqeq
            data = data.filter(d=>d.category== filters.category )
        }
        if ( filters.type ) {
            // eslint-disable-next-line eqeqeq
            data = data.filter(d=>d.type== filters.type )
        }
        return data;
    }, [state.data, filters] )
    console.log(filteredData)
    const fetchData = useCallback(async () => {
        dispatch( { type: 'FETCH_START' } );
        try {
            const data = await getTransactions();
            dispatch( { type: 'FETCH_SUCCESS', payload: data } );
            console.log( data );
            console.log( "data" );
            
            } catch ( error ) {
                dispatch( { type: 'FETCH_ERROR', payload: error.message } );
            }
        },[]
    )
    const handleDelete = async ( id ) => {
        try {
            dispatch( { type: 'FETCH_START' } );
            await deleteTransactions( id );
            fetchData()
        
        } catch ( error ) {
            dispatch( { type: 'FETCH_ERROR', payload: error.message } );
            
        }
    }
    const isMount = useRef(true)
    useEffect( () => {  
        if (isMount.current) {
            fetchData();
            isMount.current = false; 
        }}, [isMount, fetchData] );
    // Run once when the component mounts
        
    const handelFilters = ( filterData ) => {
        setFilters( filterData );
        // const fdata={...filters}
        // Object.keys( filterData ).forEach( ( key ) => {
        //     if ( key === 'keys' ) {
        //         if (!filterData) {
        //             fdata.date = false
        //             fdata.amount=false
        //         } else if ( filterData.keys === 'amount' ) {
        //             fdata.date = false
        //             fdata.amount=true
        //         } else if ( filterData.keys === 'date' ) {
        //             fdata.date = true
        //             fdata.amount=false
        //         }
        //     } else if ( key === 'category' ) {
        //         fdata.category=filterData.category?filterData.category:null
        //     } else if ( key === 'type' ) {
        //         fdata.type=filterData.type?filterData.type:null
                
        //     }
        // })
    }
    const totals = useMemo( () => {
        let income = 0;
        let expanse = 0;
        if ( state.data && state.data.length ) {
            state.data.forEach( d => {
                if ( d.type === "income" ) {
                    income += +d.amount;
                }else{
                    expanse += +d.amount;
                }

            })
        }
        return {income,expanse,total:income-expanse}
    }, [state.data])
    
    return (
        <transactionsContext.Provider value={{...state,totals,filteredData,handleDelete,fetchData,handelFilters}}>
            {children} 
        </transactionsContext.Provider>
    );
}