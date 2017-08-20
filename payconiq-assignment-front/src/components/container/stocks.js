import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { listAllStocks, deleteStock, setStocksInStore } from './../../actions/stock.actions';
import Stock from './../presentation/stock';
import IdStock from './id.stock';

class Stocks extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false, 
            idStockDisplay: false, 
            selectedStock: {}, 
            sortedBy: 'id', 
            sortDirection: 1
        }

        this.deleteStock = this.deleteStock.bind(this);
        this.updateStock = this.updateStock.bind(this);
    }

    componentWillMount(){
        this.props.listAllStocks();
    }


    deleteStock(id){
        this.props.deleteStock(id).then(
            res => {this.props.listAllStocks()}, 
            err => {}
        );    
    }
    
    updateStock(stock){
        this.setState({selectedStock:stock , idStockDisplay: true});
    }
    sortArray(sortingKey){
        let stateSortDirection = this.state.sortDirection;
        let sortDir = (sortingKey===this.state.sortedBy)?((stateSortDirection>0)?-1:1):1;
        this.setState({ sortedBy: sortingKey, sortDirection: sortDir });
        this.props.listAllStocks(sortingKey, sortDir);
    }

    render(){
       
        const stocks = (this.props.stocks) ? this.props.stocks.map((stock, idx) => {
            return (
                <Stock stock={stock} key={idx} deleteStock={this.deleteStock} updateStock={this.updateStock}/>
            );
        }) : null;   
        
        return (
            <div className='row'>
                <div className='col-md-12 col-xs-12 m-b-20'>
                    <h3>Stocks <a onClick={() => this.props.listAllStocks() }><i className='fa fa-refresh'></i></a>
                        <button className='btn btn-sm btn-primary pull-right' onClick={() => { this.setState({idStockDisplay: true, selectedStock:{}}) }}>
                            <i className='fa fa-plus'></i> New Stock
                        </button>
                    </h3>
                </div>
                <div className='col-md-12 col-xs-12'>
                    <div className='row list-header  hidden-xs'>
                        <div className='col-md-2 list-header-item' style={{cursor:'pointer' }} onClick={() => {this.sortArray('id')}}>
                            ID 
                            {this.state.sortedBy==='id' && 
                                <a style={{cursor:'pointer', textDecoration:'none', marginRight:10}} className='pull-right'> 
                                    {(this.state.sortDirection>0)?<i className='fa fa-arrow-up'></i>:<i className='fa fa-arrow-down'></i>}</a>}
                        </div>
                        <div className='col-md-3 list-header-item' style={{cursor:'pointer' }} onClick={() => {this.sortArray('name')}}>
                            Name
                            {this.state.sortedBy==='name' && 
                                <a style={{cursor:'pointer', textDecoration:'none', marginRight:10}} className='pull-right'> 
                                    {(this.state.sortDirection>0)?<i className='fa fa-arrow-up'></i>:<i className='fa fa-arrow-down'></i>}</a>}
                        </div>
                        <div className='col-md-2 list-header-item'  style={{cursor:'pointer' }} onClick={() => {this.sortArray('currentPrice')}}>
                            Current Price
                            {this.state.sortedBy==='currentPrice' && 
                                <a style={{cursor:'pointer', textDecoration:'none', marginRight:10}} className='pull-right'> 
                                    {(this.state.sortDirection>0)?<i className='fa fa-arrow-up'></i>:<i className='fa fa-arrow-down'></i>}</a>}
                        
                        </div>
                        <div className='col-md-3 list-header-item' style={{cursor:'pointer' }} onClick={() => {this.sortArray('lastUpdate')}}>
                            Last Update
                            {this.state.sortedBy==='lastUpdate' && 
                                <a style={{cursor:'pointer', textDecoration:'none', marginRight:10}} className='pull-right'> 
                                    {(this.state.sortDirection>0)?<i className='fa fa-arrow-up'></i>:<i className='fa fa-arrow-down'></i>}</a>}
                        
                        </div>
                        <div className='col-md-2 list-header-item'>
                            Actions
                        </div>
                    </div>
                    {stocks}
                </div>
                {this.state.idStockDisplay && 
                    <IdStock 
                        stock={ this.state.selectedStock } 
                        showModal={this.state.idStockDisplay} 
                        closeModal={ () => { this.setState({idStockDisplay: false}) } } 
                        sortedBy = {this.state.sortedBy}
                        sortDirection = {this.state.sortDirection}   />}
            </div>
        )
    }

}

Stocks.propTypes = {
    listAllStocks: PropTypes.func.isRequired,
    deleteStock: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        stocks: state.stock.stocks
    }
}
export default connect(mapStateToProps, { listAllStocks, deleteStock, setStocksInStore })(Stocks);