import axiosApi from "./axiosApi";
export const getTransactions = async() => {
    const { data } =await  axiosApi.get( '/transactions' );
    return data;
}
export const deleteTransactions = async(id) => {
    const { data } =await  axiosApi.delete( '/transactions/'+ id );
    return data;
}

