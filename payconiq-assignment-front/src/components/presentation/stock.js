import React from 'react';
import moment from 'moment'; 

const Stock = ({ stock, deleteStock, updateStock }) => {
    return (
        <div className='row list-item'>
            <div className='col-md-2 list-item-set'>
                {stock.id} 
                <a onClick={() => {deleteStock(stock.id)}} className='hidden-sm hidden-md hidden-lg text-danger delete-link pull-right'><i className='fa fa-close'></i></a>
                <a onClick={() => {updateStock(stock)}} className='hidden-sm hidden-md hidden-lg pull-right'><i className='fa fa-pencil'></i></a>
                
            </div>
            <div className='col-md-3 list-item-set'>
                {stock.name}
            </div>
            <div className='col-md-2 list-item-set'>
                {stock.currentPrice}
            </div>
            <div className='col-md-3 list-item-set'>
                {moment(stock.lastUpdate).format('DD-MM-YYYY HH:mm')}
            </div>
            <div className='col-md-2 list-item-set hidden-xs'>
                <a onClick={() => {updateStock(stock)}}><i className='fa fa-pencil'></i></a>
                <a className='text-danger delete-link' onClick={() => {deleteStock(stock.id)}}><i className='fa fa-close'></i></a>
            </div>
        </div>
    );
}


export default Stock; 