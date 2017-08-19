import axios from 'axios';
import { SET_STOCKS_IN_STORE } from './../constants';

export function addStock(data){
    return dispatch => {
        return axios.post('/api/stocks', data);
    }
}

function setStocksInStore(stocks){
    return {
        type: SET_STOCKS_IN_STORE, 
        payload: stocks
    }
}

export function listAllStocks(){
    return dispatch => {
        return axios.get('/api/stocks').then(
            res => {
                let stocks = res.data; 
                dispatch(setStocksInStore(stocks)); 
            }
        );
    }
}

export function listOneStock(id){
    return dispatch => {
        return axios.get('/api/stocks/'+id);
    }
}

export function updateStock(id, data){
    return dispatch => {
        return axios.put('/api/stocks/'+id, data);
    }
}

export function deleteStock(id){
    return dispatch => {
        return axios.delete('/api/stocks/'+id);
    }
}


