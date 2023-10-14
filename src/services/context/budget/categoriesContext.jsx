import React, { createContext, useReducer, useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { getCategories } from "services/apis/catogries.api";


export const categoriesContext = createContext();

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


export const CategoriesProvider = ( { children } ) => {
    const [state, dispatch] = useReducer( ContextReducer, initialState );

    const fetchData = useCallback( async () => {
        dispatch( { type: 'FETCH_START' } );
        try {
            const data = await getCategories();
            dispatch( { type: 'FETCH_SUCCESS', payload: data } );
            console.log( data );
            console.log( "data" );
            
        } catch ( error ) {
            dispatch( { type: 'FETCH_ERROR', payload: error.message } );
        }
    }, []
    )
    // const handleDelete = async ( id ) => {
    //     try {
    //         dispatch( { type: 'FETCH_START' } );
    //         await deleteTransactions( id );
    //         fetchData()
        
    //     } catch ( error ) {
    //         dispatch( { type: 'FETCH_ERROR', payload: error.message } );
            
    //     }}

    const isMount = useRef( true )
    useEffect( () => {
        if ( isMount.current ) {
            fetchData();
            isMount.current = false;
        }
    }, [isMount, fetchData] ); // Run once when the component mounts

    return (
        <categoriesContext.Provider value={{ ...state }}>
            {children}
        </categoriesContext.Provider>
    );


}