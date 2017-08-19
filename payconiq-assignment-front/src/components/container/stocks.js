import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { listAllStocks, deleteStock } from './../../actions/stock.actions';
import Stock from './../presentation/stock';
import IdStock from './id.stock';

class Stocks extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false, 
            idStockDisplay: false, 
            selectedStock: {}
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

    render(){
        //let stocks = null; 
        
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
                        <div className='col-md-2 list-header-item'>
                            ID 
                        </div>
                        <div className='col-md-3 list-header-item'>
                            Name
                        </div>
                        <div className='col-md-2 list-header-item'>
                            Current Price
                        </div>
                        <div className='col-md-3 list-header-item'>
                            Last Update
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
                        closeModal={ () => { this.setState({idStockDisplay: false}) } } />}
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
export default connect(mapStateToProps, { listAllStocks, deleteStock })(Stocks);